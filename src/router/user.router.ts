import { Router } from 'express';
import { validateRequest } from 'zod-express-middleware';
import { z } from 'zod';
import { prisma } from '../../prisma/prisma-instance';
import bcrypt from 'bcrypt';
import { authenticationMiddleware, createTokenForUser, createUnSecuredUserInfo, encryptPassword } from '../auth-utils';

export const userController = Router();

userController.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  return res.json(users);
})

userController.post("/",
  validateRequest({
    body: z.object({
      email: z.string().email(),
      password: z.string(),
    })
  }),
  async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user
      .findFirst({
        where: {
          email: email,
        }
      })
      .catch(() => null);

    if (user) {
      return res.status(500).json({ message: 'Email already in use' })
    }

    const newUser = await prisma.user
      .create({
        data: {
          email: email,
          passwordHash: await encryptPassword(password)
        }
      })
      .catch(() => null);

    if (!newUser) {
      return res.status(500).json({ message: 'Account Not created' })
    }

    const userInfo = createUnSecuredUserInfo(newUser);
    const token = createTokenForUser(newUser)

    res.json({ userInfo, token });
  });

userController.post('/auth/login',
  validateRequest({
    body: z.object({
      email: z.string().email(),
      password: z.string(),
    })
  }),
  async ({ body: { email: bodyEmail, password: bodyPassword, } }, res) => {
    const user = await prisma.user.findFirst({
      where: {
        email: bodyEmail,
      }
    });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const correctPassword = await bcrypt.compare(bodyPassword, user.passwordHash);

    if (!correctPassword) {
      return res.status(401).json({ error: 'invalid creds' });
    }

    const userInfo = createUnSecuredUserInfo(user);
    const token = createTokenForUser(user)
    return res.status(201).json({ token, userInfo })
  }
)


userController.patch("/",
  authenticationMiddleware,
  validateRequest({
    body: z.object({
      email: z.string().email(),
    })
  }),
  async (req, res, next) => {
    const { email, } = req.body;
    if (req.user!.email === email) {
      return res.status(404).json({ message: 'Please use a different email, this is the same as the old one' })
    }

    const updatedUser = await prisma.user.update({
      where: {
        email: req.user?.email,
      },
      data: {
        email: email,
      },
    });
    return res.json(updatedUser)
  }
)

userController.delete("/:email", authenticationMiddleware, async (req, res) => {
  const deletedComments = await prisma.comment.deleteMany({
    where: {
      recipe: {
        userId: req.user!.id,
      },
    },
  });
  const deletedRecipes = await prisma.recipe.deleteMany({
    where: {
      userId: req.user!.id,
    },
  });
  const deletedUser = await prisma.user.delete({
    where: {
      id: req.user!.id,
    },
  });

  return res.send({
    deletedComments,
    deletedRecipes,
    deletedUser,
  });
})

userController.get("/:email", async (req, res) => {
  const { email } = req.params;
  const user = await prisma.user.findMany({
    where: {
      email: email,
    },
  });
  return res.json(user);
});