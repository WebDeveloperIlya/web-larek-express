import { celebrate, Joi, Segments } from "celebrate";

export const validateProduct = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required().min(2).max(30),
    price: Joi.number().required(),
  }),
});

export const validateOrder = celebrate({
  [Segments.BODY]: Joi.object().keys({
    productId: Joi.string().required(),
    quantity: Joi.number().required().min(1),
  }),
});
