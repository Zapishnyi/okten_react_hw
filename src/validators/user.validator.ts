import Joi from "joi";
import { IUserAddProps } from "../models/IUserAddProps";

const userValidator: Joi.ObjectSchema<IUserAddProps> = Joi.object({
  name: Joi.string()
    .pattern(/^[A-Z][a-z]* [A-Z][a-z]*$/)
    .empty()
    .messages({
      "string.pattern.base": '"Name Surname" - required format',
      "string.empty": "This field is compulsory",
    }),
  username: Joi.string().pattern(/^\S*$/).empty().messages({
    "string.pattern.base": "One word: any symbols permitted",
    "string.empty": "This field is compulsory",
  }),
  email: Joi.string()
    .pattern(/^[a-zA-Z0-9~!$%^&*_=+}{'?\-.]*@[a-zA-Z0-9~!$%^&*_=+}{'?\-.]*$/)
    .empty()
    .messages({
      "string.pattern.base": "Please enter valid email address",
      "string.empty": "This field is compulsory",
    }),
  address: {
    street: Joi.string().empty().messages({
      "string.empty": "This field is compulsory",
    }),
    suite: Joi.number().empty().messages({
      "number.empty": "This field is compulsory",
      "number.base": "Only numbers are allowed",
    }),
    city: Joi.string().empty().messages({
      "string.empty": "This field is compulsory",
    }),
    zipcode: Joi.number().empty().messages({
      "number.empty": "This field is compulsory",
      "number.base": "Only numbers are allowed",
    }),
    geo: {
      lat: Joi.string()
        .empty()
        .pattern(/^-?\d{2}.\d{4}$/)
        .messages({
          "string.empty": "This field is compulsory",
          "string.base": "Only numbers are allowed",
          "string.pattern.base": "(-)xx.xxxx - format",
        }),
      lng: Joi.string()
        .empty()
        .pattern(/^-?\d{2}.\d{4}$/)
        .messages({
          "string.empty": "This field is compulsory",
          "string.base": "Only numbers are allowed",
          "string.pattern.base": "(-)xx.xxxx - format",
        }),
    },
  },
});

export { userValidator };
