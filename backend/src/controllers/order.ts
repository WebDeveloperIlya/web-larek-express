import { Request, Response, NextFunction } from "express";
import BadRequestError from "../errors/bad-request-error";

export const createOrder = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      throw new BadRequestError("Product ID and quantity are required");
    }

    res.status(201).json({ message: "Order created successfully" });
  } catch (err) {
    next(err);
  }
};
