import { Router } from 'express';
import { validateRequest } from 'zod-express-middleware';
import { z } from 'zod';
import { prisma } from '../../prisma/prisma-instance';

export const categoriesController = Router();

categoriesController.get('/categories', async (req, res) => {
  const categories = await prisma.category.findMany();
  return res.json(categories);
})