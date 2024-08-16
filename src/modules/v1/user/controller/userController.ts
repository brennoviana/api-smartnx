import { User } from "../model/userModel";
import { Request, Response } from "express";

class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll();
      res.status(200).send(users);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        res.status(500).send({ message: error.message });
      } else {
        res.status(500).send({ message: "An unknown error occurred." });
      }
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).send({ message: "User not found." });
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        res.status(500).send({ message: error.message });
      } else {
        res.status(500).send({ message: "An unknown error occurred." });
      }
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        res.status(500).send({ message: error.message });
      } else {
        res.status(500).send({ message: "An unknown error occurred." });
      }
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const [updated] = await User.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedUser = await User.findByPk(req.params.id);
        res.status(200).json(updatedUser);
      } else {
        res.status(404).send({ message: "User not found." });
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        res.status(500).send({ message: error.message });
      } else {
        res.status(500).send({ message: "An unknown error occurred." });
      }
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const deleted = await User.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).send({ message: "User not found." });
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        res.status(500).send({ message: error.message });
      } else {
        res.status(500).send({ message: "An unknown error occurred." });
      }
    }
  }
}

const userController = new UserController();
export { userController };
