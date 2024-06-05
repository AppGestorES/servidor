import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    getFormulasService,
    getFormulasByNombreService,
    getFormulasByProyectoService,
    postFormulasService,
    putFormulasService,
    deleteFormulasService,
} from "@services/formulasService";
import {
    postFormulasInterface,
    putFormulasInterface,
    getFormulasInterface,
} from "@interfaces/formulas.interface";

export class Formulas {
    async getFormulas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getFormulasService);
                const formulas: getFormulasInterface[] = results.map(
                    (row: any) => ({
                        id: row.id,
                        nombre: row.nombre,
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
                    })
                );
                resultHandler(
                    { status: STATUS_OK, success: true, result: formulas },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getFormulasByNombre(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const nombre = `%${req.params.nombre}%`;
                const results = await conn.query(getFormulasByNombreService, [
                    nombre,
                ]);
                const formulas: getFormulasInterface[] = results.map(
                    (row: any) => ({
                        id: row.id,
                        nombre: row.nombre,
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
                    })
                );
                resultHandler(
                    { status: STATUS_OK, success: true, result: formulas },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getFormulasByProyecto(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const id_proyecto = req.params.id_proyecto;
                const results = await conn.query(getFormulasByProyectoService, [
                    id_proyecto,
                ]);
                const formulas: getFormulasInterface[] = results.map(
                    (row: any) => ({
                        id: row.id,
                        nombre: row.nombre,
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
                    })
                );
                resultHandler(
                    { status: STATUS_OK, success: true, result: formulas },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async postFormulas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { nombre, caducidad, id_proyecto } =
                    req.body as postFormulasInterface;
                const results = await conn.query(postFormulasService, [
                    nombre,
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

    async putFormulas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { nombre, caducidad, id_proyecto } =
                    req.body as putFormulasInterface;
                const { id } = req.params;
                const results = await conn.query(putFormulasService, [
                    nombre,
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

    async deleteFormulas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { id } = req.params;
                const results = await conn.query(deleteFormulasService, [id]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }
}
