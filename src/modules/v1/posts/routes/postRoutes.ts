import { Router } from "express";
import { postController } from "../controller/postController";
import { postSchema } from "../schema/postSchema";
import { validateRequestSchema } from "../../../../../generic-middlewares/validateRequestSchema";
import { validatePostExists } from "../middlewares/validatePostExists";

const postRoutes = Router();

postRoutes.get("/", postController.getPosts);

postRoutes.get("/:id", validatePostExists, postController.getPostById);

postRoutes.post(
  "/",
  validateRequestSchema(postSchema),
  postController.createPost,
);

postRoutes.put(
  "/:id",
  validatePostExists,
  validateRequestSchema(postSchema),
  postController.updatePost,
);

postRoutes.delete("/:id", validatePostExists, postController.deletePost);

export { postRoutes };
