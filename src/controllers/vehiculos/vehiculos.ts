import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    getVehiculosService,
    getVehiculosByMatriculaService,
    getVehiculosByProyectoService,
    postVehiculosService,
    putVehiculosService,
    deleteVehiculosService,
} from "@services/vehiculosService";
import {
    postVehiculosInterface,
    putVehiculosInterface,
    getVehiculosInterface,
} from "@interfaces/vehiculos.interface";

export class Vehiculos {
    async getVehiculos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getVehiculosService);
                const vehiculos: getVehiculosInterface[] = results.map(
                    (row: any) => ({
                        id: row.id,
                        matricula: row.matricula,
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
                    { status: STATUS_OK, success: true, result: vehiculos },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getVehiculosByMatricula(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const matricula = `%${req.params.matricula}%`;
                const results = await conn.query(
                    getVehiculosByMatriculaService,
                    [matricula]
                );
                const vehiculos: getVehiculosInterface[] = results.map(
                    (row: any) => ({
                        id: row.id,
                        matricula: row.matricula,
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
                    { status: STATUS_OK, success: true, result: vehiculos },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getVehiculosByProyecto(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const id_proyecto = req.params.id_proyecto;
                const results = await conn.query(
                    getVehiculosByProyectoService,
                    [id_proyecto]
                );
                const vehiculos: getVehiculosInterface[] = results.map(
                    (row: any) => ({
                        id: row.id,
                        matricula: row.matricula,
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
                    { status: STATUS_OK, success: true, result: vehiculos },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async postVehiculos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { matricula, id_proyecto } =
                    req.body as postVehiculosInterface;
                const results = await conn.query(postVehiculosService, [
                    matricula,
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

    async putVehiculos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { matricula, id_proyecto } =
                    req.body as putVehiculosInterface;
                const { id } = req.params;
                const results = await conn.query(putVehiculosService, [
                    matricula,
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

    async deleteVehiculos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { id } = req.params;
                const results = await conn.query(deleteVehiculosService, [id]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }
}
