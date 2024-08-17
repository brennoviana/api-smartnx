import { User } from "../modules/v1/model/userModel";

declare module "express-serve-static-core" {
  interface Request {
    user?: User;
  }
}
