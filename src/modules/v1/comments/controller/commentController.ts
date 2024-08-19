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
      return res
        .status(500)
        .send({ message: UseFulFunctions.getErrorMessage(error) });
    }
  }

  async deleteComment(req: Request, res: Response) {
    try {
      const deleted = await Comment.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        return res
          .status(200)
          .send({ message: "Comment successfully deleted." });
      }
      return res.status(400).send({ message: "Failed to delete comment." });
    } catch (error) {
      return res
        .status(500)
        .send({ message: UseFulFunctions.getErrorMessage(error) });
    }
  }

  async updateComment(req: Request, res: Response) {
    try {
      const [updated] = await Comment.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedComment = await Comment.findByPk(req.params.id);
        return res.status(200).json(updatedComment);
      }
      return res.status(400).send({ message: "Failed to update comment." });
    } catch (error) {
      return res
        .status(500)
        .send({ message: UseFulFunctions.getErrorMessage(error) });
    }
  }
}

const commentController = new CommentController();
export { commentController };
