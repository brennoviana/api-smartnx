import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

function validateRequestSchema(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    next();
  };
}

export { validateRequestSchema };
