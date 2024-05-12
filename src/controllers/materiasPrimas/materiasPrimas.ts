import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    getMateriasPrimasService,
    postMateriasPrimasService,
} from "@services/materiasPrimasService";
import { postMateriasPrimasInterface } from "@interfaces/materiasPrimas.interface";

export class MateriasPrimas {
    async getMateriasPrimas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getMateriasPrimasService, [
                    req.body,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
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
                const materiaPrima: postMateriasPrimasInterface = req.body;
                const results = await conn.query(postMateriasPrimasService, [
                    req.body,
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
