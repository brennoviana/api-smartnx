import { User } from "../modules/v1/users/interface/userInterface";

declare module "express-serve-static-core" {
  interface Request {
    user?: User;
  }
}
