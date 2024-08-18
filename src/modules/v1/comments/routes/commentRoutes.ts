import { Router } from "express";
import { commentController } from "../controller/commentController";
import { validateRequestSchema } from "../../../../generic-middlewares/validateRequestSchema";
import { validateUserExists } from "../../users/middlewares/validateUserExists";
import { validatePostExists } from "../../posts/middlewares/validatePostExists";
import { validateCommentExists } from "../middlewares/validateCommentExists";
import { commentCreateSchema } from "../schema/commentCreateSchema";
import { commentUpdateSchema } from "../schema/commentUpdateSchema";

const commentRoutes = Router();

commentRoutes.get("/", commentController.getComments);

commentRoutes.get(
  "/:id",
  validateCommentExists,
  commentController.getCommentById,
);

commentRoutes.post(
  "/",
  validateRequestSchema(commentCreateSchema),
  validateUserExists,
  validatePostExists,
  commentController.createComment,
);

commentRoutes.put(
  "/:id",
  validateRequestSchema(commentUpdateSchema),
  validatePostExists,
  validateUserExists,
  validateCommentExists,
  commentController.updateComment,
);

commentRoutes.delete(
  "/:id",
  validateCommentExists,
  commentController.deleteComment,
);

export { commentRoutes };
