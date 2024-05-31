import Joi from "joi";
import ICarToSend from "../models/ICarToSend";

const carValidator: Joi.ObjectSchema<ICarToSend> = Joi.object({
  brand: Joi.string()
    .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/)
    .min(1)
    .max(20)
    .required()
    .messages({}),
  price: Joi.number().max(100000).min(0).required().messages({}),
  year: Joi.number().max(2024).min(1990).required().messages({}),
});

export default carValidator;
