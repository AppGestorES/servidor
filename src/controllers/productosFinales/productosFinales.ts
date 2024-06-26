import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    getProductosFinalesService,
    getProductosFinalesByNombreService,
    getProductosFinalesByProyectoService,
    postProductosFinalesService,
    putProductosFinalesService,
    deleteProductosFinalesService,
} from "@services/productosFinalesService";
import {
    postProductosFinalesInterface,
    putProductosFinalesInterface,
    getProductosFinalesInterface,
} from "@interfaces/productosFinales.interface";

export class ProductosFinales {
    async getProductosFinales(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getProductosFinalesService);
                const productosFinales: getProductosFinalesInterface[] =
                    results.map((row: any) => ({
                        id: row.id,
                        nombre: row.nombre,
                        formula_id: row.formula_id,
                        caducidad: row.caducidad,
                        proyecto: {
                            id: row.proyecto_id,
                            nombre: row.proyecto_nombre,
                            nif: row.proyecto_nif,
                            direccion: row.proyecto_direccion,
                            codigo_postal: row.proyecto_codigo_postal,
                            poblacion: row.proyecto_poblacion,
                            telefono: row.proyecto_telefono,
                            correo_electronico: row.proyecto_correo_electronico,
                            logo: row.proyecto_logo,
                        },
                    }));
                resultHandler(
                    {
                        status: STATUS_OK,
                        success: true,
                        result: productosFinales,
                    },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getProductosFinalesByNombre(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const nombre = `%${req.params.nombre}%`;
                const results = await conn.query(
                    getProductosFinalesByNombreService,
                    [nombre]
                );
                const productosFinales: getProductosFinalesInterface[] =
                    results.map((row: any) => ({
                        id: row.id,
                        nombre: row.nombre,
                        formula_id: row.formula_id,
                        caducidad: row.caducidad,
                        proyecto: {
                            id: row.proyecto_id,
                            nombre: row.proyecto_nombre,
                            nif: row.proyecto_nif,
                            direccion: row.proyecto_direccion,
                            codigo_postal: row.proyecto_codigo_postal,
                            poblacion: row.proyecto_poblacion,
                            telefono: row.proyecto_telefono,
                            correo_electronico: row.proyecto_correo_electronico,
                            logo: row.proyecto_logo,
                        },
                    }));
                resultHandler(
                    {
                        status: STATUS_OK,
                        success: true,
                        result: productosFinales,
                    },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getProductosFinalesByProyecto(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const id_proyecto = req.params.id_proyecto;
                const results = await conn.query(
                    getProductosFinalesByProyectoService,
                    [id_proyecto]
                );
                const productosFinales: getProductosFinalesInterface[] =
                    results.map((row: any) => ({
                        id: row.id,
                        nombre: row.nombre,
                        formula_id: row.formula_id,
                        caducidad: row.caducidad,
                        proyecto: {
                            id: row.proyecto_id,
                            nombre: row.proyecto_nombre,
                            nif: row.proyecto_nif,
                            direccion: row.proyecto_direccion,
                            codigo_postal: row.proyecto_codigo_postal,
                            poblacion: row.proyecto_poblacion,
                            telefono: row.proyecto_telefono,
                            correo_electronico: row.proyecto_correo_electronico,
                            logo: row.proyecto_logo,
                        },
                    }));
                resultHandler(
                    {
                        status: STATUS_OK,
                        success: true,
                        result: productosFinales,
                    },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async postProductosFinales(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { nombre, formula_id, caducidad, id_proyecto } =
                    req.body as postProductosFinalesInterface;
                const results = await conn.query(postProductosFinalesService, [
                    nombre,
                    formula_id,
                    caducidad,
                    id_proyecto,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async putProductosFinales(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { nombre, formula_id, caducidad, id_proyecto } =
                    req.body as putProductosFinalesInterface;
                const { id } = req.params;
                const results = await conn.query(putProductosFinalesService, [
                    nombre,
                    formula_id,
                    caducidad,
                    id_proyecto,
                    id,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async deleteProductosFinales(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { id } = req.params;
                const results = await conn.query(
                    deleteProductosFinalesService,
                    [id]
                );
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }
}
