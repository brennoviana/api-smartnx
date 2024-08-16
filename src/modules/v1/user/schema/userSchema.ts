import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().max(100).required(),
  cpf: Joi.string().length(11).pattern(/^\d+$/).required(),
  address: Joi.string().max(255).required(),
  number: Joi.string().max(10).required(),
  city: Joi.string().max(100).required(),
  state: Joi.string().length(2).required(),
  zip_code: Joi.string().length(8).pattern(/^\d+$/).required(),
});

export { userSchema };
