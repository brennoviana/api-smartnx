import express from "express";
import { userRoutes } from "../modules/v1/users/routes/userRoutes";
import { postRoutes } from "../modules/v1/posts/routes/postRoutes";

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/posts", postRoutes);

export { app };
