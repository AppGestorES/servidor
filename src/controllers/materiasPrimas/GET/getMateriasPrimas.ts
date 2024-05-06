import { Request, Response, NextFunction } from "express";
import { query } from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import { getMateriasPrimas } from "@services/materiasPrimas/materiasPrimasService";

export class MateriasPrimas {
    async getMateriasPrimas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const results = await query(getMateriasPrimas);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res
                );
            }
        )(req, res, next);
    }
}
