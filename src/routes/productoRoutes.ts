import { Router } from "express";
import { getProductos } from "../controllers/productoController.js";

const router = Router();

router.get("/",
    getProductos);

export default router;