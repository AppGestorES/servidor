import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    getUsuariosService,
    getUsuarioByIdService,
    getUsuariosByNombreService,
    getUsuariosByApellidoService,
    getUsuariosByIdentificadorService,
    getUsuariosByProyectoService,
    postUsuariosService,
    putUsuariosService,
    deleteUsuariosService,
} from "@services/usuariosService";
import {
    postUsuariosInterface,
    putUsuariosInterface,
} from "@interfaces/usuarios.interface";
import { Sesiones } from "@controllers/sesiones/sesiones";

export class Usuarios {
    async getUsuarios(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getUsuariosService);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getUsuariosByNombre(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const nombre = `%${req.params.nombre}%`;
                const results = await conn.query(getUsuariosByNombreService, [
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

    async getUsuarioById(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getUsuarioByIdService, [
                    req.params.id,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getUsuariosByApellido(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const apellido = `%${req.params.apellido}%`;
                const results = await conn.query(getUsuariosByApellidoService, [
                    apellido,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getUsuariosByIdentificador(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const identificador = `%${req.params.identificador}%`;
                const results = await conn.query(
                    getUsuariosByIdentificadorService,
                    [identificador]
                );
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getUsuariosByProyecto(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const proyecto = `%${req.params.proyecto}%`;
                const results = await conn.query(getUsuariosByProyectoService, [
                    proyecto,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async postUsuarios(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const {
                    nombre,
                    apellido,
                    contrasena,
                    identificador,
                    id_proyecto,
                } = req.body as postUsuariosInterface;
                const results = await conn.query(postUsuariosService, [
                    nombre,
                    apellido,
                    contrasena,
                    identificador,
                    id_proyecto,
                ]);
                const userId = Number(results.insertId);
                const token = await new Sesiones().postSesion(userId);
                console.log(token)
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async putUsuarios(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const {
                    nombre,
                    apellido,
                    foto,
                    contrasena,
                    identificador,
                    id_proyecto,
                } = req.body as putUsuariosInterface;
                const { id } = req.params;
                const results = await conn.query(putUsuariosService, [
                    nombre,
                    apellido,
                    foto,
                    contrasena,
                    identificador,
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

    async deleteUsuarios(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { id } = req.params;
                const results = await conn.query(deleteUsuariosService, [id]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }
}
