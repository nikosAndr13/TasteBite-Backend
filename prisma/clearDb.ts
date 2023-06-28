import { prisma } from "./prisma-instance";

export async function clearDb() {
  await prisma.comment.deleteMany({});
  await prisma.recipe.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.category.deleteMany({});
}