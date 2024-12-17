import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: [true, 'Поле "title" должно быть заполнено'],
    minlength: [2, 'Минимальная длина поля "title" - 2'],
    maxlength: [30, 'Максимальная длина поля "title" - 30'],
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = model("Product", productSchema);

export default Product;
