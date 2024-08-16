import { User } from "../model/userModel";
import { Request, Response } from "express";

class UserController {
  static getErrorMessage(error: unknown): string {
    return error instanceof Error
      ? error.message
      : "An unknown error occurred.";
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll();
      return res.status(200).send(users);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: UserController.getErrorMessage(error) });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        return res.status(200).json(user);
      }
      return res.status(404).send({ message: "User not found." });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: UserController.getErrorMessage(error) });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const newUser = await User.create(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: UserController.getErrorMessage(error) });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const [updated] = await User.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedUser = await User.findByPk(req.params.id);
        return res.status(200).json(updatedUser);
      }
      return res.status(404).send({ message: "User not found." });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: UserController.getErrorMessage(error) });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const deleted = await User.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        return res.status(200).send({ message: "User successfully deleted." });
      }
      return res.status(404).send({ message: "User not found." });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: UserController.getErrorMessage(error) });
    }
  }
}

const userController = new UserController();
export { userController };
