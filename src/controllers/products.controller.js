import { prisma } from "../db.js";

export const getProducts = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      include: { category: true },
    });
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(req.params.id) },
      include: { category: true },
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const product = await prisma.product.create({
      data: req.body,
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const product = await prisma.product.update({
      where: { id: Number(req.params.id) },
      data: req.body,
      include: { category: true },
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await prisma.product.delete({
      where: { id: Number(req.params.id) },
    });
    res.json(product.quantity);
  } catch (error) {
    next(error);
  }
};