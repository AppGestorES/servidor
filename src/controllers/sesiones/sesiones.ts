import { Request, Response, NextFunction } from "express";
import pool from "@config/db";
import jwt from "jsonwebtoken";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import { postSesionesService } from "@services/sesionesService";
import { postSesionesInterface } from "@interfaces/sesiones.interface";

export class Sesiones {
    async postSesion(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { fecha, usuario } = req.body as postSesionesInterface;
                const token = jwt.sign({ usuario }, process.env.JWT_SECRET!, {
                    expiresIn: "30d",
                });
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
