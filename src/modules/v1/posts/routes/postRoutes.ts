import { Router } from "express";
import { postController } from "../controller/postController";
// import { userSchema } from "../schema/userSchema";
// import { validateRequestSchema } from "../middlewares/validateRequestSchema";
// import { validateUserExists } from "../middlewares/validateUserExists";

const postRoutes = Router();

postRoutes.get("/", postController.getPosts);

postRoutes.get("/:id", postController.getPostById);

postRoutes.post("/", postController.createPost);

// userRoutes.put("/:id", userController.updateUser);

// userRoutes.delete("/:id", userController.deleteUser);

export { postRoutes };
