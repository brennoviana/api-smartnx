import { Request, Response, NextFunction } from "express";
import { Post } from "../model/postModel";

async function validatePostExists(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).send({ message: "Post not found." });
    }

    req.post = post;

    next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "An error occurred while verifying the post." });
  }
}

export { validatePostExists };
