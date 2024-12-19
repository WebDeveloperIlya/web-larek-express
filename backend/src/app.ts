import express from "express";
import mongoose from "mongoose";
import { errors } from "celebrate";
import errorHandler from "./midlewares/error-handler";
import routes from "./routes/index";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(routes);

app.use(errors());

app.use(errorHandler);

async function start() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydb");
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

start();
