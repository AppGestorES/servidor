import express, { Request, Response, NextFunction } from "express";
import { query } from "@config/db";

import tryCatch from "@utils/tryCatch";
import resultHandler from "@middlewares/resultHandler";

const router = express.Router();

router.get(
    "/panel",
    tryCatch(async (req: Request, res: Response) => {
        const sqlSelect =
            "SELECT * FROM partidos WHERE tipo = 0 ORDER BY progreso ASC, fecha ASC";
        const result = await query(sqlSelect);
        resultHandler({ status: 200, success: true, result: result }, res);
    })
);

export default router;
