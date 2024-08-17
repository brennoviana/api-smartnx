import { UniqueConstraintError } from "sequelize";
import { Post } from "../model/postModel";
import { Request, Response } from "express";
import { UseFulFunctions } from "../../../../../useFulFunctions/UseFulFunctions";

class PostController {
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
        .send({ message: UseFulFunctions.getErrorMessage(error) });
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
        .send({ message: UseFulFunctions.getErrorMessage(error) });
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
        .send({ message: UseFulFunctions.getErrorMessage(error) });
    }
  }

  async deletePost(req: Request, res: Response) {
    try {
      const deleted = await Post.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        return res.status(200).send({ message: "Post successfully deleted." });
      }
      return res.status(400).send({ message: "Failed to delete post." });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: UseFulFunctions.getErrorMessage(error) });
    }
  }

  async updatePost(req: Request, res: Response) {
    try {
      const [updated] = await Post.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedPost = await Post.findByPk(req.params.id);
        return res.status(200).json(updatedPost);
      }
      return res.status(400).send({ message: "Failed to update post." });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: UseFulFunctions.getErrorMessage(error) });
    }
  }
}

const postController = new PostController();
export { postController };
