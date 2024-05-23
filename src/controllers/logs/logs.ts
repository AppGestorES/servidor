import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    getLogsService,
    getLogsByTipoService,
    getLogsByUsuarioService,
    postLogsService,
    putLogsService,
    deleteLogsService,
} from "@services/logsService";
import {
    postLogsInterface,
    putLogsInterface,
} from "@interfaces/logs.interface";

export class Logs {
    async getLogs(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getLogsService);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getLogsByTipo(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const tipo = `%${req.params.tipo}%`;
                const results = await conn.query(getLogsByTipoService, [
                    tipo,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getLogsByUsuario(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const usuario = req.params.usuario;
                const results = await conn.query(getLogsByUsuarioService, [
                    usuario,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async postLogs(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const {
                    fecha,
                    tipo,
                    mensaje,
                    version,
                    usuario,
                } = req.body as postLogsInterface;
                const results = await conn.query(postLogsService, [
                    fecha,
                    tipo,
                    mensaje,
                    version,
                    usuario,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async putLogs(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const {
                    fecha,
                    tipo,
                    mensaje,
                    version,
                    usuario,
                } = req.body as putLogsInterface;
                const { id } = req.params;
                const results = await conn.query(putLogsService, [
                    fecha,
                    tipo,
                    mensaje,
                    version,
                    usuario,
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

    async deleteLogs(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { id } = req.params;
                const results = await conn.query(deleteLogsService, [id]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }
}
