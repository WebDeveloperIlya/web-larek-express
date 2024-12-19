import { Schema, model } from "mongoose";

const productSchema = new Schema({
  description: {
    type: String,
    required: [true, 'Поле "description" должно быть заполнено'],
  },
  image: {
    fileName: {
      type: String,
      required: true,
    },
    originalName: {
      type: String,
      required: true,
    },
  },
  title: {
    type: String,
    unique: true,
    required: [true, 'Поле "title" должно быть заполнено'],
    minlength: [2, 'Минимальная длина поля "title" - 2'],
    maxlength: [30, 'Максимальная длина поля "title" - 30'],
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: null,
  },
});

const Product = model("Product", productSchema);

export default Product;
