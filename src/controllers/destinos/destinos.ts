import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    getDestinosService,
    getDestinosByIdService,
    getDestinosByNombreService,
    getDestinosByIdProyectoService,
    postDestinosService,
    putDestinosService,
    deleteDestinosService,
} from "@services/destinosService";
import {
    getDestinosInterface,
    postDestinosInterface,
    putDestinosInterface,
} from "@interfaces/destinos.interface";

export class Destinos {
    async getDestinos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getDestinosService);
                const destinos: getDestinosInterface = results.map((row: any) => ({
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
                        logo: row.proyecto_logo
                    }
                }));
                resultHandler(
                    { status: STATUS_OK, success: true, result: destinos },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getDestinosById(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const id = req.params.id;
                const results = await conn.query(getDestinosByIdService, [id]);
                const destinos: getDestinosInterface = results.map((row: any) => ({
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
                        logo: row.proyecto_logo
                    }
                }));
                resultHandler(
                    { status: STATUS_OK, success: true, result: destinos },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getDestinosByNombre(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const nombre = `%${req.params.nombre}%`;
                const results = await conn.query(getDestinosByNombreService, [nombre]);
                const destinos: getDestinosInterface = results.map((row: any) => ({
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
                        logo: row.proyecto_logo
                    }
                }));
                resultHandler(
                    { status: STATUS_OK, success: true, result: destinos },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getDestinosByIdProyecto(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const id = req.params.id;
                const results = await conn.query(
                    getDestinosByIdProyectoService,
                    [id]
                );
                const destinos: getDestinosInterface = results.map((row: any) => ({
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
                        logo: row.proyecto_logo
                    }
                }));
                resultHandler(
                    { status: STATUS_OK, success: true, result: destinos },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async postDestinos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { nombre, id_proyecto } =
                    req.body as postDestinosInterface;
                const results = await conn.query(postDestinosService, [
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

    async putDestinos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { nombre } = req.body as putDestinosInterface;
                const { id } = req.params;
                const results = await conn.query(putDestinosService, [
                    nombre,
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

    async deleteDestinos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { id } = req.params;
                const results = await conn.query(deleteDestinosService, [id]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }
}
