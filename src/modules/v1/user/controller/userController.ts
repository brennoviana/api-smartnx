// import { userModel } from "../model/userModel";
import { Request, Response } from "express";

class UserController {
  async getUsers(req: Request, res: Response) {
    try {

      res.status(200).send("teste");
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Internal server error.'});
    }
  };
}

const userController = new UserController();
export { userController };