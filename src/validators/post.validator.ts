import Joi from "joi";
import { IPostAddProps } from "../models/IPostAddProps";

const postValidator: Joi.ObjectSchema<IPostAddProps> = Joi.object({
  userId: Joi.number().empty().messages({
    "number.base": "Only numbers are allowed",
    "number.empty": "This field is compulsory",
  }),
  body: Joi.string().empty().messages({
    "string.empty": "This field is compulsory",
  }),
  title: Joi.string().empty().messages({
    "string.empty": "This field is compulsory",
  }),
});

export { postValidator };
