import { UniqueConstraintError } from "sequelize";
import { User } from "../model/userModel";
import { Request, Response } from "express";
import { userSchema } from "../schema/userSchema";

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
      return res.status(200).json(req.user);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: UserController.getErrorMessage(error) });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const { error } = userSchema.validate(req.body);
      if (error) {
        return res.status(400).send({ message: error.details[0].message });
      }

      const newUser = await User.create(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      if (error instanceof UniqueConstraintError) {
        return res.status(409).send({ message: "CPF already exists." });
      }
      return res
        .status(500)
        .send({ message: UserController.getErrorMessage(error) });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { error } = userSchema.validate(req.body);
      if (error) {
        return res.status(400).send({ message: error.details[0].message });
      }
      const [updated] = await User.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedUser = await User.findByPk(req.params.id);
        return res.status(200).json(updatedUser);
      }
      return res.status(400).send({ message: "Failed to update user." });
    } catch (error) {
      console.error(error);
      if (error instanceof UniqueConstraintError) {
        return res.status(409).send({ message: "CPF already exists." });
      }
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
      return res.status(400).send({ message: "Failed to delete user." });
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
