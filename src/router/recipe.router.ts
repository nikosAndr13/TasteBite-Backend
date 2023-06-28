import { Router } from 'express';
import { prisma } from '../../prisma/prisma-instance';
import 'express-async-errors'
import { validateRequest } from 'zod-express-middleware';
import { z } from 'zod';
import { authenticationMiddleware, getDataFromAuthToken } from '../auth-utils';


export const recipesController = Router();
//get all recipes
recipesController.get("/", async (req, res) => {
  const recipes = await prisma.recipe.findMany();
  return res.json(recipes);
});

//post recipe
recipesController.post("/",
  validateRequest({
    body: z.object({
      title: z.string(),
      category: z.string(),
      description: z.string(),
      ingredients: z.string(),
      directions: z.string(),
      imageUrl: z.string()
    })
  }),
  authenticationMiddleware,
  async (req, res) => {
    const { title, category,
      description, ingredients, directions, imageUrl, } = req.body;

    const recipe = await prisma.recipe
      .create({
        data: {
          title,
          category,
          userId: req.user!.id,
          description,
          ingredients,
          directions,
          imageUrl,
        }
      })
      .catch(() => null);

    if (!recipe) {
      return res.status(500).json({ message: 'Recipe Not created' })
    }

    return res.json(recipe)
  })

recipesController.delete("/:id", authenticationMiddleware, async (req, res) => {
  const id = +req.params.id;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'id must be a number' })
  }

  const deleted = await Promise.resolve()
    .then(() => prisma.recipe.delete({
      where: {
        id,
      },
    })
      .catch(() => null));

  if (deleted === null) {
    return res.sendStatus(204);
  }

  return res.send(deleted);
})