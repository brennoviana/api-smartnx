import { Router } from "express";
import { postController } from "../controller/postController";
// import { userSchema } from "../schema/userSchema";
// import { validateRequestSchema } from "../middlewares/validateRequestSchema";
import { validatePostExists } from "../middlewares/validatePostExists";

const postRoutes = Router();

postRoutes.get("/", postController.getPosts);

postRoutes.get("/:id", validatePostExists, postController.getPostById);

postRoutes.post("/", postController.createPost);

postRoutes.put("/:id", validatePostExists, postController.updatePost);

postRoutes.delete("/:id", validatePostExists, postController.deletePost);

export { postRoutes };
