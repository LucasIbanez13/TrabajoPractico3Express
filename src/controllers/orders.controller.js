import { prisma } from "../db.js";

export const getOrders = async (req, res, next) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true,
        orderItems: {
          include: {
            product: {
              include: { category: true },
            },
          },
        },
      },
    });
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (req, res, next) => {
  try {
    const order = await prisma.order.findUnique({
      where: { id: Number(req.params.id) },
      include: {
        user: true,
        orderItems: {
          include: {
            product: {
              include: { category: true },
            },
          },
        },
      },
    });
    res.json(order);
  } catch (error) {
    next(error);
  }
};

export const createOrder = async (req, res, next) => {
  try {
    const order = await prisma.order.create({
      data: {
        userId: req.body.userId,
        orderItems: {
          create: req.body.orderItems.map((item) => ({
            quantity: item.quantity,
            productId: item.productId,
          })),
        },
      },
      include: {
        user: true,
        orderItems: {
          include: {
            product: {
              include: { category: true },
            },
          },
        },
      },
    });
    res.json(order);
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    const order = await prisma.order.delete({
      where: { id: Number(req.params.id) },
    });
    res.json(order);
  } catch (error) {
    next(error);
  }
};