import { Router } from "express";
import { userController } from "../controller/userController";
import { userSchema } from "../schema/userSchema";
import { validateRequestSchema } from "../middlewares/validateRequestSchema";
import { validateUserExists } from "../middlewares/validateUserExists";

const userRoutes = Router();

userRoutes.get("/", userController.getUsers);

userRoutes.get("/:id", validateUserExists, userController.getUserById);

userRoutes.post(
  "/",
  validateRequestSchema(userSchema),
  userController.createUser,
);

userRoutes.put(
  "/:id",
  validateRequestSchema(userSchema),
  validateUserExists,
  userController.updateUser,
);

userRoutes.delete("/:id", validateUserExists, userController.deleteUser);

export { userRoutes };
