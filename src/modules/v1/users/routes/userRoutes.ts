import { Router } from "express";
import { userController } from "../controller/userController";
import { userCreateSchema } from "../schema/userCreateSchema";
import { validateRequestSchema } from "../../../../generic-middlewares/validateRequestSchema";
import { authenticateJWT } from "../../../../generic-middlewares/authenticateJWT";
import { validateUserExists } from "../middlewares/validateUserExists";
import { userUpdateSchema } from "../schema/userUpdateSchema";

const userRoutes = Router();

userRoutes.get("/", authenticateJWT, userController.getUsers);

userRoutes.get(
  "/:id",
  authenticateJWT,
  validateUserExists,
  userController.getUserById,
);

userRoutes.post(
  "/",
  validateRequestSchema(userCreateSchema),
  userController.createUser,
);

userRoutes.put(
  "/:id",
  authenticateJWT,
  validateUserExists,
  validateRequestSchema(userUpdateSchema),
  userController.updateUser,
);

userRoutes.delete(
  "/:id",
  authenticateJWT,
  validateUserExists,
  userController.deleteUser,
);

userRoutes.post("/login", userController.loginUser);

export { userRoutes };
