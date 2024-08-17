import { Router } from "express";
import { postController } from "../controller/postController";
import { postCreateSchema } from "../schema/postCreateSchema";
import { postUpdateSchema } from "../schema/postUpdateSchema";
import { validateRequestSchema } from "../../../../generic-middlewares/validateRequestSchema";
import { validatePostExists } from "../middlewares/validatePostExists";
import { validateUserBodyExists } from "../middlewares/validateUserBodyExists";

const postRoutes = Router();

postRoutes.get("/", postController.getPosts);

postRoutes.get("/:id", validatePostExists, postController.getPostById);

postRoutes.post(
  "/",
  validateRequestSchema(postCreateSchema),
  validateUserBodyExists,
  postController.createPost,
);

postRoutes.put(
  "/:id",
  validatePostExists,
  validateRequestSchema(postUpdateSchema),
  validateUserBodyExists,
  postController.updatePost,
);

postRoutes.delete("/:id", validatePostExists, postController.deletePost);

export { postRoutes };
