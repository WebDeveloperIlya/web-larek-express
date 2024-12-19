import { Request, Response, NextFunction } from "express";
import Order from "../models/order"; // Подключение модели заказа
import BadRequestError from "../errors/bad-request-error";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { payment, email, phone, address, total, items } = req.body;

    if (!payment || !email || !phone || !address || !total || !items || !items.length) {
      throw new BadRequestError("All fields are required, and items cannot be empty");
    }

    const order = new Order({ payment, email, phone, address, total, items });
    await order.save();

    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};
