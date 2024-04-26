import express, { Request, Response, NextFunction } from "express";
import { query } from "@config/db";

import tryCatch from "@utils/tryCatch";
import resultHandler from "@middlewares/resultHandler";

const router = express.Router();

router.get(
    "/panel",
    tryCatch(async (req: Request, res: Response) => {
        console.log("Preparando para ejecutar la consulta SQL");
        const sqlSelect = "SELECT * FROM usuarios";
        const result = await query(sqlSelect);
        console.log("Consulta SQL ejecutada");
        resultHandler({ status: 200, success: true, result: result }, res);
    })
);


export default router;
