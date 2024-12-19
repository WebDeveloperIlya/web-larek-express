import { celebrate, Joi, Segments } from "celebrate";

export const validateProduct = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required().min(2).max(30),
    price: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.object({
      fileName: Joi.string().required(),
      originalName: Joi.string().required(),
    }).required(),
    category: Joi.string().required(),
  }),
});


export const validateOrder = celebrate({
  [Segments.BODY]: Joi.object().keys({
    payment: Joi.string().valid("card", "online").required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^\+\d{10,15}$/).required(),
    address: Joi.string().required(),
    total: Joi.number().required(),
    items: Joi.array().items(Joi.string().hex().length(24)).required(),
  }),
});

