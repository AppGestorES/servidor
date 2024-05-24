import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    getEntradasService,
    getEntradasByProductoFinalService,
    getEntradasByFechaEntradaService,
    getEntradasByProveedorService,
    getEntradasByNumeroAlbaranService,
    postEntradasService,
    putEntradasService,
    deleteEntradasService,
} from "@services/entradaProductosService";
import {
    postEntradasInterface,
    putEntradasInterface,
} from "@interfaces/entradaProductos.interface";

export class EntradaProductos {
    async getEntradas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getEntradasService);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getEntradasByProductoFinal(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const producto_final_id = req.params.producto_final_id;
                const results = await conn.query(getEntradasByProductoFinalService, [
                    producto_final_id,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getEntradasByFechaEntrada(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const fecha_entrada = req.params.fecha_entrada;
                const results = await conn.query(getEntradasByFechaEntradaService, [
                    fecha_entrada,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getEntradasByProveedor(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const proveedor = `%${req.params.proveedor}%`;
                const results = await conn.query(getEntradasByProveedorService, [
                    proveedor,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getEntradasByNumeroAlbaran(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const numero_albaran = `%${req.params.numero_albaran}%`;
                const results = await conn.query(getEntradasByNumeroAlbaranService, [
                    numero_albaran,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async postEntradas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const {
                    producto_final_id,
                    fecha_entrada,
                    proveedor,
                    numero_albaran,
                    numero_lote,
                    cantidad_kg,
                    fecha_caducidad,
                    envasado_id,
                    operario_id,
                    id_proyecto,
                } = req.body as postEntradasInterface;
                const results = await conn.query(postEntradasService, [
                    producto_final_id,
                    fecha_entrada,
                    proveedor,
                    numero_albaran,
                    numero_lote,
                    cantidad_kg,
                    fecha_caducidad,
                    envasado_id,
                    operario_id,
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

    async putEntradas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const {
                    producto_final_id,
                    fecha_entrada,
                    proveedor,
                    numero_albaran,
                    numero_lote,
                    cantidad_kg,
                    fecha_caducidad,
                    envasado_id,
                    operario_id,
                    id_proyecto,
                } = req.body as putEntradasInterface;
                const { id } = req.params;
                const results = await conn.query(putEntradasService, [
                    producto_final_id,
                    fecha_entrada,
                    proveedor,
                    numero_albaran,
                    numero_lote,
                    cantidad_kg,
                    fecha_caducidad,
                    envasado_id,
                    operario_id,
                    id_proyecto,
                    id,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async deleteEntradas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { id } = req.params;
                const results = await conn.query(deleteEntradasService, [id]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }
}
