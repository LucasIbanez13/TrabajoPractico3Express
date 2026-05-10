import { prisma } from "../db.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      include: { orders: true },
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(req.params.id) },
      include: { orders: true },
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data: req.body,
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const user = await prisma.user.delete({
      where: { id: Number(req.params.id) },
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
};