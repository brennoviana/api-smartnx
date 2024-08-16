import { Router } from "express";
import { userController } from "../controller/userController";

const userRoutes = Router();

userRoutes.get("/", userController.getUsers);

userRoutes.get("/:id", userController.getUserById);

userRoutes.post("/", userController.createUser);

userRoutes.put("/:id", userController.updateUser);

userRoutes.delete("/:id", userController.deleteUser);

export { userRoutes };
