import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import { postSesionesService } from "@services/sesionesService";
import { postSesionesInterface } from "@interfaces/sesiones.interface";

export class Sesiones {
    async postUsuarios(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { token, fecha, usuario } =
                    req.body as postSesionesInterface;
                const results = await conn.query(postSesionesService, [
                    token,
                    fecha,
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
}
