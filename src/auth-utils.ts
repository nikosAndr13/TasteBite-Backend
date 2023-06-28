import { User } from '@prisma/client';
import bcrypt from 'bcrypt'
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import { z } from 'zod';
import { prisma } from '../prisma/prisma-instance';
import dotenv from 'dotenv';

dotenv.config();

declare module 'express' {
  interface Request {
    user?: User;
  }
}

export const encryptPassword = (password: string) => {
  return bcrypt.hash(password, 11);
}

export const createUnSecuredUserInfo = (user: User) => ({
  email: user.email,
  id: user.id,
})

export const createTokenForUser = (user: User) => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error('JWT secret is not defined.');
  }
  return jwt.sign(createUnSecuredUserInfo(user), jwtSecret);

}

const jwtInfoSchema = z.object({
  email: z.string(),
  id: z.number(),
  iat: z.number(),
})

export const getDataFromAuthToken = (token?: string) => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error('JWT secret is not defined.');
  }
  if (!token) { return false }
  try {
    return jwtInfoSchema.parse(jwt.verify(token, jwtSecret));
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const authenticationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const [, token] = req.headers.authorization?.split?.(" ") || [];

  const userJwtData = getDataFromAuthToken(token);

  if (!userJwtData) {
    return res.status(401).json({ message: "Invalid Token" });
  }

  const userFromJwt = await prisma.user.findFirst({
    where: {
      email: userJwtData.email,
    },
  });
  if (!userFromJwt) {
    return res.status(404).json({ message: "User not found" });
  }
  req.user = userFromJwt;
  next();
};