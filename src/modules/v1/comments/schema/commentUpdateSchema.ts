import Joi from "joi";

const commentUpdateSchema = Joi.object({
  content: Joi.string().optional(),
  postId: Joi.number().integer().positive().optional(),
  userId: Joi.number().integer().positive().optional(),
});

export { commentUpdateSchema };
