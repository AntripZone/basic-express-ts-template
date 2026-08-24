import { pool } from "../config/db.js";
import type { Request, Response } from "express";

export async function getProductos(req:Request, res: Response) {
    /*#swagger.tags = ['Menu Productos']*/
    try{
        const result = await pool.query("SELECT * FROM productos;");
        res.json({
            message: "Conexion exitosa a la base de datos",
            total: result.rowCount,
            data: result.rows,
        });
    }catch(error){
        console.error("Error al consultar PostgreSQL: ");
        res.status(500).json({
            message: "Error al conectar al Base de Datos.",
        });
    }  
}
