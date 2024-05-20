import { Request, Response, NextFunction } from "express";
import pool from "@config/db";
import jwt from "jsonwebtoken";

import tryCatch, { tryCatchDefault } from "@utils/tryCatch";
import { STATUS_NOT_FOUND, STATUS_NO_ACCESS, STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    postSesionesService,
    iniciarSesionService,
} from "@services/sesionesService";
import {
    postSesionesInterface,
    iniciarSesionInterface,
    registrarSesionInterface,
} from "@interfaces/sesiones.interface";
import { postUsuariosInterface } from "@interfaces/usuarios.interface";
import { postUsuariosService } from "@services/usuariosService";

export class Sesiones {
    async iniciarSesion(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { usuario, contrasena } =
                    req.body as iniciarSesionInterface;
                const results = await conn.query(iniciarSesionService, [
                    usuario,
                    contrasena,
                ]);

                if (results.length === 0) {
                    return resultHandler(
                        {
                            status: STATUS_NOT_FOUND,
                            success: false,
                            result: "Credenciales erróneas.",
                        },
                        res,
                        conn
                    );
                }

                if (results[0].contrasena == contrasena) {
                    const userId = Number(results[0].id);
                    const token = await new Sesiones().postSesion(userId);
                    resultHandler(
                        {
                            status: STATUS_OK,
                            success: true,
                            result: token,
                        },
                        res,
                        conn
                    );
                } else {
                    resultHandler(
                        {
                            status: STATUS_NOT_FOUND,
                            success: false,
                            result: "Credenciales erróneas.",
                        },
                        res,
                        conn
                    );
                }

                await conn.release();
            }
        )(req, res, next);
    }

    async registrarSesion(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { nombre, apellido, contrasena, identificador } =
                    req.body as registrarSesionInterface;
                const results = await conn.query(postUsuariosService, [
                    nombre, apellido, contrasena, identificador, 0
                ]);

                if (results.insertId > 0) {
                    const userId = Number(results.insertId);
                    const token = await new Sesiones().postSesion(userId);
                    resultHandler(
                        {
                            status: STATUS_OK,
                            success: true,
                            result: token,
                        },
                        res,
                        conn
                    );
                } else {
                    resultHandler(
                        {
                            status: STATUS_NO_ACCESS,
                            success: false,
                            result: "El usuario ya existe.",
                        },
                        res,
                        conn
                    );
                }

                await conn.release();
            }
        )(req, res, next);
    }

    async postSesion(userId: number): Promise<string> {
        const generateToken = async (): Promise<string> => {
            const conn = await pool.getConnection();
            const fecha: number = Math.floor(Date.now() / 1000);
            const usuario = userId;
            const token = jwt.sign({ usuario }, process.env.JWT_SECRET!, {
                expiresIn: "30d",
            });
            await conn.query(postSesionesService, [token, fecha, usuario]);
            await conn.release();
            return token;
        };
        return await tryCatchDefault(generateToken)();
    }
}
