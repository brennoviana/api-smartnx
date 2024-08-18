import { Router } from "express";
import { commentController } from "../controller/commentController";
import { validateRequestSchema } from "../../../../generic-middlewares/validateRequestSchema";
import { validateUserExists } from "../../users/middlewares/validateUserExists";
import { validatePostExists } from "../../posts/middlewares/validatePostExists";
import { commentCreateSchema } from "../schema/commentCreateSchema";

const commentRoutes = Router();

commentRoutes.get("/", commentController.getComments);

commentRoutes.get("/:id", commentController.getCommentById);

commentRoutes.post(
  "/",
  validateRequestSchema(commentCreateSchema),
  validateUserExists,
  validatePostExists,
  commentController.createComment,
);

// postRoutes.put(
//   "/:id",
//   validatePostExists,
//   validateRequestSchema(postUpdateSchema),
//   validateUserExists,
//   postController.updatePost,
// );

// postRoutes.delete("/:id", validatePostExists, postController.deletePost);

export { commentRoutes };
