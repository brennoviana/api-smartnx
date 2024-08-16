import { User } from "../model/userModel";
import { Request, Response } from "express";

class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll();
      res.status(200).send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal server error." });
    }
  }
}

const userController = new UserController();
export { userController };
