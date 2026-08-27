import { pool } from "../config/db.js";
import type { Request, Response } from "express";

export async function getProductos(req:Request, res: Response) {
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

export async function createProducto(req: Request, res: Response) {
    try {
        const { nombre, descrip, precio } = req.body;

        const result = await pool.query(
            "INSERT INTO productos (nombre, descrip, precio) VALUES ($1, $2, $3) RETURNING *;",
            [nombre, descrip, precio]
        );

        res.status(201).json({
            message: "Producto creado correctamente",
            data: result.rows[0],
        });
    } catch (error) {
        console.error("Error al insertar en PostgreSQL: ", error);
        res.status(500).json({
            message: "Error al conectar al Base de Datos.",
        });
    }
}
