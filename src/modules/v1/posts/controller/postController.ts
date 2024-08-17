import { UniqueConstraintError } from "sequelize";
import { Post } from "../model/postModel";
import { Request, Response } from "express";

class PostController {
  static getErrorMessage(error: unknown): string {
    return error instanceof Error
      ? error.message
      : "An unknown error occurred.";
  }

  async getPosts(req: Request, res: Response) {
    try {
      const posts = await Post.findAll();
      if (posts.length == 0) {
        return res.status(200).send({ message: "No posts found." });
      }
      return res.status(200).send(posts);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: PostController.getErrorMessage(error) });
    }
  }

  async getPostById(req: Request, res: Response) {
    try {
      const post = await Post.findByPk(req.params.id);
      if (!post) {
        return res.status(404).send({ message: "Post not found." });
      }
      return res.status(200).json(post);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: PostController.getErrorMessage(error) });
    }
  }

  async createPost(req: Request, res: Response) {
    try {
      const newPost = await Post.create(req.body);
      return res.status(201).json(newPost);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: PostController.getErrorMessage(error) });
    }
  }
}

const postController = new PostController();
export { postController };
