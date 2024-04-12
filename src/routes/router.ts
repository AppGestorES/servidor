import express, { Request, Response } from "express";
import { query } from "@config/db";

const router = express.Router();

router.get("/panel", async (req: Request, res: Response) => {
    console.log(process.env.DB_HOST)
    const sqlSelect =
        "SELECT * FROM partidos WHERE tipo = 0 ORDER BY progreso ASC, fecha ASC";
    try {
        const result = await query(sqlSelect);
        res.send({ status: 200, success: true, result: result });
    } catch (err) {
        res.send({
            status: 500,
            success: false,
            reason: "Problema con la base de datos.",
            error: err,
        });
    }
});

export default router;
