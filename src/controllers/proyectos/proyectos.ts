import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    getProyectosService,
    getProyectosByNombreService,
    getProyectosByNIFService,
    getProyectosByTelefonoService,
    getProyectosByCorreoElectronicoService,
    postProyectosService,
    putProyectosService,
    deleteProyectosService,
} from "@services/proyectosService";
import {
    postProyectosInterface,
    putProyectosInterface,
} from "@interfaces/proyectos.interface";

export class Proyectos {
    async getProyectos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getProyectosService);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getProyectosByNombre(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const nombre = `%${req.params.nombre}%`;
                const results = await conn.query(getProyectosByNombreService, [
                    nombre,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getProyectosByNIF(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const nif = `%${req.params.nif}%`;
                const results = await conn.query(getProyectosByNIFService, [
                    nif,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getProyectosByTelefono(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const telefono = `%${req.params.telefono}%`;
                const results = await conn.query(getProyectosByTelefonoService, [
                    telefono,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getProyectosByCorreoElectronico(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const correo = `%${req.params.correo}%`;
                const results = await conn.query(getProyectosByCorreoElectronicoService, [
                    correo,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async postProyectos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const {
                    nombre,
                    nif,
                    direccion,
                    codigo_postal,
                    poblacion,
                    telefono,
                    correo_electronico,
                    logo,
                } = req.body as postProyectosInterface;
                const results = await conn.query(postProyectosService, [
                    nombre,
                    nif,
                    direccion,
                    codigo_postal,
                    poblacion,
                    telefono,
                    correo_electronico,
                    logo,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async putProyectos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const {
                    nombre,
                    nif,
                    direccion,
                    codigo_postal,
                    poblacion,
                    telefono,
                    correo_electronico,
                    logo,
                } = req.body as putProyectosInterface;
                const { id } = req.params;
                const results = await conn.query(putProyectosService, [
                    nombre,
                    nif,
                    direccion,
                    codigo_postal,
                    poblacion,
                    telefono,
                    correo_electronico,
                    logo,
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

    async deleteProyectos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { id } = req.params;
                const results = await conn.query(deleteProyectosService, [id]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }
}
