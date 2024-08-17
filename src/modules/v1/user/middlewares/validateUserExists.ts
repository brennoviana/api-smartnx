import { Request, Response, NextFunction } from "express";
import { User } from "../model/userModel";

async function validateUserExists(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "An error occurred while verifying the user." });
  }
}

export { validateUserExists };
