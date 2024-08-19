import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../config/env/envConfig";

const secretKey = config.jwtSecret;

export const authenticateJWT = (
  req: Request & { user?: string | JwtPayload },
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res
          .status(403)
          .json({ message: "Forbidden: Invalid or expired token." });
      }

      req.user = user;
      next();
    });
  } else {
    return res
      .status(401)
      .json({ message: "Unauthorized: No token provided." });
  }
};
