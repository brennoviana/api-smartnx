import { Router } from "express";
import { userController } from "../controller/userController";
import { userSchema } from "../schema/userSchema";
import { validateRequestSchema } from "../../../../../generic-middlewares/validateRequestSchema";
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
  validateUserExists,
  validateRequestSchema(userSchema),
  userController.updateUser,
);

userRoutes.delete("/:id", validateUserExists, userController.deleteUser);

export { userRoutes };
