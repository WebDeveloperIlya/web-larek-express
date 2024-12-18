import { Schema, model, Types } from "mongoose";

const orderSchema = new Schema({
  payment: {
    type: String,
    enum: ["card", "online"],
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Поле "email" должно быть валидным адресом'],
  },
  phone: {
    type: String,
    required: true,
    match: [/^\+\d{10,15}$/, 'Поле "phone" должно быть валидным номером'],
  },
  address: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  items: [
    {
      type: Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
});

const Order = model("Order", orderSchema);

export default Order;
