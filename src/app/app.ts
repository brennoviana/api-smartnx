import express from "express";
import { userRoutes } from "../modules/v1/users/routes/userRoutes";
import { postRoutes } from "../modules/v1/posts/routes/postRoutes";
import { commentRoutes } from "../modules/v1/comments/routes/commentRoutes";
import { authenticateJWT } from "../generic-middlewares/authenticateJWT";

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/posts", authenticateJWT, postRoutes);

app.use("/api/v1/comments", authenticateJWT, commentRoutes);

export { app };
