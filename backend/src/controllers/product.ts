import { Request, Response, NextFunction } from "express";
import BadRequestError from "../errors/bad-request-error";
import ConflictError from "../errors/conflict-error";
import Product from "../models/product";

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, price, description, image, category } = req.body;

    if (!title || !price || !description || !image || !category) {
      throw new BadRequestError("All fields are required");
    }

    const existingProduct = await Product.findOne({ title });

    if (existingProduct) {
      throw new ConflictError("Product with this title already exists");
    }

    const product = new Product({ title, price, description, image, category });
    await product.save();

    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};
