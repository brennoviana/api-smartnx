import { Router } from "express";
import { userController } from "../controller/userController";
import { userCreateSchema } from "../schema/userCreateSchema";
import { validateRequestSchema } from "../../../../generic-middlewares/validateRequestSchema";
import { validateUserExists } from "../middlewares/validateUserExists";
import { userUpdateSchema } from "../schema/userUpdateSchema";

const userRoutes = Router();

userRoutes.get("/", userController.getUsers);

userRoutes.get("/:id", validateUserExists, userController.getUserById);

userRoutes.post(
  "/",
  validateRequestSchema(userCreateSchema),
  userController.createUser,
);

userRoutes.put(
  "/:id",
  validateUserExists,
  validateRequestSchema(userUpdateSchema),
  userController.updateUser,
);

userRoutes.delete("/:id", validateUserExists, userController.deleteUser);

export { userRoutes };
