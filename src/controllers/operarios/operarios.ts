import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    getOperariosService,
    getOperariosByNombreService,
    getOperariosByProyectoService,
    postOperariosService,
    putOperariosService,
    deleteOperariosService,
} from "@services/operariosService";
import {
    postOperariosInterface,
    putOperariosInterface,
    getOperariosInterface,
} from "@interfaces/operarios.interface";

export class Operarios {
    async getOperarios(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getOperariosService);
                const operarios: getOperariosInterface[] = results.map(
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
                    { status: STATUS_OK, success: true, result: operarios },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getOperariosByNombre(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const nombre = `%${req.params.nombre}%`;
                const results = await conn.query(getOperariosByNombreService, [
                    nombre,
                ]);
                const operarios: getOperariosInterface[] = results.map(
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
                    { status: STATUS_OK, success: true, result: operarios },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getOperariosByProyecto(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const id_proyecto = req.params.id_proyecto;
                const results = await conn.query(
                    getOperariosByProyectoService,
                    [id_proyecto]
                );
                const operarios: getOperariosInterface[] = results.map(
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
                    { status: STATUS_OK, success: true, result: operarios },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async postOperarios(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { nombre, id_proyecto } =
                    req.body as postOperariosInterface;
                const results = await conn.query(postOperariosService, [
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

    async putOperarios(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { nombre, id_proyecto } =
                    req.body as putOperariosInterface;
                const { id } = req.params;
                const results = await conn.query(putOperariosService, [
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

    async deleteOperarios(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { id } = req.params;
                const results = await conn.query(deleteOperariosService, [id]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }
}
