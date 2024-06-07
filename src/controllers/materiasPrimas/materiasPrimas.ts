import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    getMateriasPrimasService,
    getMateriasPrimasByNombreService,
    getMateriasPrimasByProyectoService,
    postMateriasPrimasService,
    putMateriasPrimasService,
    deleteMateriasPrimasService,
} from "@services/materiasPrimasService";
import {
    postMateriasPrimasInterface,
    putMateriasPrimasInterface,
    getMateriasPrimasInterface,
} from "@interfaces/materiasPrimas.interface";

export class MateriasPrimas {
    async getMateriasPrimas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getMateriasPrimasService);
                const materiasPrimas: getMateriasPrimasInterface[] =
                    results.map((row: any) => ({
                        id: row.id,
                        nombre: row.nombre,
                        caducidad: row.caducidad,
                        stock_kgs: row.stock_kgs,
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
                        result: materiasPrimas,
                    },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getMateriasPrimasByNombre(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const nombre = `%${req.params.nombre}%`;
                const results = await conn.query(
                    getMateriasPrimasByNombreService,
                    [nombre]
                );
                const materiasPrimas: getMateriasPrimasInterface[] =
                    results.map((row: any) => ({
                        id: row.id,
                        nombre: row.nombre,
                        caducidad: row.caducidad,
                        stock_kgs: row.stock_kgs,
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
                        result: materiasPrimas,
                    },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getMateriasPrimasByProyecto(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const id_proyecto = req.params.id_proyecto;
                const results = await conn.query(
                    getMateriasPrimasByProyectoService,
                    [id_proyecto]
                );
                const materiasPrimas: getMateriasPrimasInterface[] =
                    results.map((row: any) => ({
                        id: row.id,
                        nombre: row.nombre,
                        caducidad: row.caducidad,
                        stock_kgs: row.stock_kgs,
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
                        result: materiasPrimas,
                    },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async postMateriasPrimas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { nombre, caducidad, stock_kgs, id_proyecto } =
                    req.body as postMateriasPrimasInterface;
                const results = await conn.query(postMateriasPrimasService, [
                    nombre,
                    caducidad,
                    stock_kgs,
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

    async putMateriasPrimas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { nombre, caducidad, stock_kgs, id_proyecto } =
                    req.body as putMateriasPrimasInterface;
                const { id } = req.params;
                const results = await conn.query(putMateriasPrimasService, [
                    nombre,
                    caducidad,
                    stock_kgs,
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

    async deleteMateriasPrimas(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { id } = req.params;
                const results = await conn.query(deleteMateriasPrimasService, [
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
