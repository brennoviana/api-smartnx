import Joi from "joi";

const postUpdateSchema = Joi.object({
  title: Joi.string().max(255).optional(),
  content: Joi.string().optional(),
  userId: Joi.number().integer().positive().optional(),
});

export { postUpdateSchema };
