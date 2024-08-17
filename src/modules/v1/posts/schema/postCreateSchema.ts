import Joi from "joi";

const postCreateSchema = Joi.object({
  title: Joi.string().max(255).required(),
  content: Joi.string().required(),
  userId: Joi.number().integer().positive().required(),
});

export { postCreateSchema };
