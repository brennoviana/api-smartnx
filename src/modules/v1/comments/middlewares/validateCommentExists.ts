import { Request, Response, NextFunction } from "express";
import { Comment } from "../model/commentModel";

async function validateCommentExists(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const commentId = req.body.commentId || req.params.id;

    if (!commentId) {
      return res.status(400).json({ error: "Comment ID is required" });
    }

    const comment = await Comment.findByPk(commentId);
    if (!comment) {
      return res.status(404).send({ message: "Comment not found." });
    }

    req.comment = comment;

    next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "An error occurred while verifying the comment." });
  }
}

export { validateCommentExists };
