import Joi from "joi";

const userValidator = Joi.object({
  username: Joi.string()
    .pattern(/^[a-zA-Z]\w{1,19}$/)
    .min(1)
    .max(20)
    .required()
    .messages({}),
  password: Joi.string()
    .pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/)
    .max(128)
    .min(1)
    .required()
    .messages({}),
});

export default userValidator;
