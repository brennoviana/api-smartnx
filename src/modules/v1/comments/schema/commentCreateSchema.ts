import Joi from "joi";

const commentCreateSchema = Joi.object({
  content: Joi.string().required(),
  postId: Joi.number().integer().positive().required(),
  userId: Joi.number().integer().positive().required(),
});

export { commentCreateSchema };
