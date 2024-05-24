import Joi from "joi";
import { IAuthProps } from "../models/IAuthProps";

const userValidator: Joi.ObjectSchema<IAuthProps> = Joi.object({
  username: Joi.string()
    .pattern(/^[a-zA-Z_]*$/)
    .empty()
    .min(1)
    .max(20)
    .messages({
      "string.pattern.base": "No numbers",
      "string.empty": "This field is compulsory",
      "string.min": "1-20 characters",
      "string.max": "1-20 characters",
    }),
  password: Joi.string()
    .pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/)
    .empty()
    .min(8)
    .max(20)
    .messages({
      "string.pattern.base":
        "must contain 1 number, uppercase and lowercase letter",
      "string.empty": "This field is compulsory",
      "string.min": "8-20 characters",
      "string.max": "8-20 characters",
    }),
  rePassword: Joi.any().equal(Joi.ref("password")).empty().messages({
    "any.only": "Passwords are not the same",
  }),
});

export default userValidator;
