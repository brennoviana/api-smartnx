import express from "express";
import { userRoutes } from "../modules/v1/user/routes/userRoutes";

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRoutes);

export { app };
