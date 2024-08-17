import { Router } from "express";
import { postController } from "../controller/postController";
import { postCreateSchema } from "../schema/postCreateSchema";
import { postUpdateSchema } from "../schema/postUpdateSchema";
import { validateRequestSchema } from "../../../../../generic-middlewares/validateRequestSchema";
import { validatePostExists } from "../middlewares/validatePostExists";

const postRoutes = Router();

postRoutes.get("/", postController.getPosts);

postRoutes.get("/:id", validatePostExists, postController.getPostById);

postRoutes.post(
  "/",
  validateRequestSchema(postCreateSchema),
  postController.createPost,
);

postRoutes.put(
  "/:id",
  validatePostExists,
  validateRequestSchema(postUpdateSchema),
  postController.updatePost,
);

postRoutes.delete("/:id", validatePostExists, postController.deletePost);

export { postRoutes };
