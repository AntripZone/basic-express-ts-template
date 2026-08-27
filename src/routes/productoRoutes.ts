import { Router } from "express";
import { getProductos, createProducto } from "../controllers/productoController.js";
import { validateProduct } from "../middlewares/validate-product.js";

const router = Router();

router.get("/menu", getProductos);

router.post("/menu", validateProduct, createProducto);

export default router;
