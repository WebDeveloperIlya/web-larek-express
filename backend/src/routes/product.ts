import { Router } from "express";
import { getProducts, createProduct } from "../controllers/product";
import { validateProduct } from "../midlewares/validation";

const router = Router();

router.get("/", getProducts);
router.post("/", validateProduct, createProduct);

export default router;
