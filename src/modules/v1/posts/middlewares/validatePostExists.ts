import { Request, Response, NextFunction } from "express";
import { Post } from "../model/postModel";

async function validatePostExists(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const userId = req.body.postId || req.params.id;

    if (!userId) {
      return res.status(400).json({ error: "Post ID is required" });
    }

    const post = await Post.findByPk(userId);
    if (!post) {
      return res.status(404).send({ message: "Post not found." });
    }

    req.post = post;

    next();
  } catch (error) {
    return res
      .status(500)
      .send({ message: "An error occurred while verifying the post." });
  }
}

export { validatePostExists };
