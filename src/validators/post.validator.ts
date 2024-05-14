import Joi from "joi";

export const postValidator = Joi.object({
  title: Joi.string()
    .max(26)
    .pattern(/^[a-zA-Z, :-_.]*$/)
    .messages({
      "string.base": "Numbers are not allowed",
      "string.empty": "This field is required",
      "string.pattern.base": "This literals are not allowed",
      "string.max": "26 symbols limit reached",
    }),
  body: Joi.string()
    .required()
    .max(350)
    .pattern(/^[\D]*$/)
    .messages({
      "string.empty": "This field is required",
      "string.max": "Maximum 350 symbols limit reached",
      "string.pattern.base": "Numbers are not allowed",
    }),
  userId: Joi.number().integer().max(10).min(1).required().messages({
    "number.base": "Only numbers are allowed",
    "number.max": "ID number must be less or equal 10",
    "number.min": "ID number must be greater or equal 1",
  }),
});
