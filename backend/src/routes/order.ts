import { Router } from "express";
import { createOrder } from "../controllers/order";
import { validateOrder } from "../midlewares/validation";

const router = Router();

router.post("/", validateOrder, createOrder);

export default router;
