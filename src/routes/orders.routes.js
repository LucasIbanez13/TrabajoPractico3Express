import { Router } from "express";
import { getOrders, getOrder, createOrder, deleteOrder } from "../controllers/orders.controller.js";

const router = Router();

router.get("/orders", getOrders);
router.get("/orders/:id", getOrder);
router.post("/orders", createOrder);
router.delete("/orders/:id", deleteOrder);

export default router;