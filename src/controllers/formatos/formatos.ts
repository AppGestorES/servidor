import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    getFormatosService,
    getFormatosByNombreService,
    getFormatosByProyectoService,
    postFormatosService,
    putFormatosService,
    deleteFormatosService,
} from "@services/formatosService";
import {
    postFormatosInterface,
    putFormatosInterface,
    getFormatosInterface
} from "@interfaces/formatos.interface";

export class Formatos {
    async getFormatos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getFormatosService);
                const formatos: getFormatosInterface[] = results.map((row: any) => ({
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
                    { status: STATUS_OK, success: true, result: formatos },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getFormatosByNombre(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const nombre = `%${req.params.nombre}%`;
                const results = await conn.query(getFormatosByNombreService, [
                    nombre,
                ]);
                const formatos: getFormatosInterface[] = results.map((row: any) => ({
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
                    { status: STATUS_OK, success: true, result: formatos },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getFormatosByProyecto(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const id_proyecto = req.params.id_proyecto;
                const results = await conn.query(
                    getFormatosByProyectoService,
                    [id_proyecto]
                );
                const formatos: getFormatosInterface[] = results.map((row: any) => ({
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
                    { status: STATUS_OK, success: true, result: formatos },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async postFormatos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { nombre, id_proyecto } =
                    req.body as postFormatosInterface;
                const results = await conn.query(postFormatosService, [
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

    async putFormatos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { nombre, id_proyecto } =
                    req.body as putFormatosInterface;
                const { id } = req.params;
                const results = await conn.query(putFormatosService, [
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

    async deleteFormatos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { id } = req.params;
                const results = await conn.query(deleteFormatosService, [id]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }
}
