import { Request, Response, NextFunction } from "express";
import pool from "@config/db";
import jwt from "jsonwebtoken";

import tryCatch, { tryCatchDefault } from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import { postSesionesService } from "@services/sesionesService";
import { postSesionesInterface } from "@interfaces/sesiones.interface";
import { postUsuariosInterface } from "@interfaces/usuarios.interface";

export class Sesiones {
    async postSesion(userId: number) {
        await tryCatchDefault(
            async () => {
                const conn = await pool.getConnection();
                const fecha: number = Math.floor(Date.now() / 1000);
                const usuario = userId;
                const token = jwt.sign({ usuario }, process.env.JWT_SECRET!, {
                    expiresIn: "30d",
                });
                console.log(token)
                await conn.query(postSesionesService, [
                    token,
                    fecha,
                    usuario,
                ]);
                return token;
            }
        )();
    }
}
