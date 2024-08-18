import { Request, Response } from "express";
import { Comment } from "../model/commentModel";
import { UseFulFunctions } from "../../../../useFulFunctions/UseFulFunctions";

class CommentController {
  async getComments(req: Request, res: Response) {
    try {
      const comments = await Comment.findAll();
      if (comments.length === 0) {
        return res.status(200).send({ message: "No comments found." });
      }
      return res.status(200).send(comments);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: UseFulFunctions.getErrorMessage(error) });
    }
  }

  async getCommentById(req: Request, res: Response) {
    try {
      const comment = await Comment.findByPk(req.params.id);
      if (!comment) {
        return res.status(404).send({ message: "Comment not found." });
      }
      return res.status(200).json(comment);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: UseFulFunctions.getErrorMessage(error) });
    }
  }

  async createComment(req: Request, res: Response) {
    try {
      const newComment = await Comment.create(req.body);
      return res.status(201).json(newComment);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: UseFulFunctions.getErrorMessage(error) });
    }
  }
}

const commentController = new CommentController();
export { commentController };
