import { Router } from 'express';
import { prisma } from '../../prisma/prisma-instance';
import 'express-async-errors'
import { validateRequest } from 'zod-express-middleware';
import { z } from 'zod';
import { authenticationMiddleware } from '../auth-utils';

export const commentController = Router();

commentController.get("/comments/:recipeId", async (req, res) => {
  const id = +req.params.recipeId;

  const comments = await prisma.comment.findMany({
    where: {
      recipeId: id,
    },
    include: {
      user: {
        select: {
          email: true
        }
      }
    }
  })
  return res.json(comments)
})

commentController.post("/comments",
  authenticationMiddleware,
  validateRequest({
    body: z.object({
      recipeId: z.number(),
      comment: z.string()
    })
  }),
  async (req, res) => {
    const { recipeId, comment } = req.body;


    const newComment = await prisma.comment.create({
      data: {
        userId: req.user!.id,
        recipeId,
        comment,
      }
    })

    if (!newComment) {
      return res.status(500).json({ message: 'Recipe Not created' })
    }

    return res.json(newComment)
  })
