import { User } from "../modules/v1/users/interface/userInterface";
import { Post } from "../modules/v1/posts/interface/postInterface";

declare module "express-serve-static-core" {
  interface Request {
    user?: User;
    post?: Post;
  }
}
