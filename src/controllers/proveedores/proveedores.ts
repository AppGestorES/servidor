import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    getProveedoresService,
    getProveedoresByNombreService,
    getProveedoresByProyectoService,
    postProveedoresService,
    putProveedoresService,
    deleteProveedoresService,
} from "@services/proveedoresService";
import {
    postProveedoresInterface,
    putProveedoresInterface,
    getProveedoresInterface,
} from "@interfaces/proveedores.interface";

export class Proveedores {
    async getProveedores(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getProveedoresService);
                const proveedores: getProveedoresInterface[] = results.map(
                    (row: any) => ({
                        id: row.id,
                        nombre: row.nombre,
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
                    })
                );
                resultHandler(
                    { status: STATUS_OK, success: true, result: proveedores },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getProveedoresByNombre(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const nombre = `%${req.params.nombre}%`;
                const results = await conn.query(
                    getProveedoresByNombreService,
                    [nombre]
                );
                const proveedores: getProveedoresInterface[] = results.map(
                    (row: any) => ({
                        id: row.id,
                        nombre: row.nombre,
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
                    })
                );
                resultHandler(
                    { status: STATUS_OK, success: true, result: proveedores },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getProveedoresByProyecto(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const id_proyecto = req.params.id_proyecto;
                const results = await conn.query(
                    getProveedoresByProyectoService,
                    [id_proyecto]
                );
                const proveedores: getProveedoresInterface[] = results.map(
                    (row: any) => ({
                        id: row.id,
                        nombre: row.nombre,
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
                    })
                );
                resultHandler(
                    { status: STATUS_OK, success: true, result: proveedores },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async postProveedores(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { nombre, id_proyecto } =
                    req.body as postProveedoresInterface;
                const results = await conn.query(postProveedoresService, [
                    nombre,
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

    async putProveedores(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { nombre, id_proyecto } =
                    req.body as putProveedoresInterface;
                const { id } = req.params;
                const results = await conn.query(putProveedoresService, [
                    nombre,
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

    async deleteProveedores(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { id } = req.params;
                const results = await conn.query(deleteProveedoresService, [
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
}
