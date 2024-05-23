import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    getIngredientesService,
    getIngredientesByFormulaService,
    getIngredientesByMateriaPrimaService,
    getIngredientesByProyectoService,
    postIngredientesService,
    deleteIngredientesService,
} from "@services/ingredientesService";
import {
    postIngredientesInterface,
} from "@interfaces/ingredientes.interface";

export class Ingredientes {
    async getIngredientes(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getIngredientesService);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getIngredientesByFormula(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const formula_id = req.params.formula_id;
                const results = await conn.query(getIngredientesByFormulaService, [
                    formula_id,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getIngredientesByMateriaPrima(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const materia_prima_id = req.params.materia_prima_id;
                const results = await conn.query(getIngredientesByMateriaPrimaService, [
                    materia_prima_id,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getIngredientesByProyecto(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const id_proyecto = req.params.id_proyecto;
                const results = await conn.query(getIngredientesByProyectoService, [
                    id_proyecto,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async postIngredientes(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const {
                    formula_id,
                    materia_prima_id,
                    cantidad_kgs,
                    id_proyecto,
                } = req.body as postIngredientesInterface;
                const results = await conn.query(postIngredientesService, [
                    formula_id,
                    materia_prima_id,
                    cantidad_kgs,
                    id_proyecto,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async deleteIngredientes(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { formula_id, materia_prima_id } = req.params;
                const results = await conn.query(deleteIngredientesService, [formula_id, materia_prima_id]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }
}
