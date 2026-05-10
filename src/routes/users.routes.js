import { Router } from "express";
import { getUsers, getUser, createUser, deleteUser } from "../controllers/users.controller.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);

export default router;