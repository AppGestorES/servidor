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
    getEntradasInterface
} from "@interfaces/entradaProductos.interface";

export class EntradaProductos {
    async getEntradas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getEntradasService);
                const entradas: getEntradasInterface[] = results.map((row: any) => ({
                    id: row.id,
                    producto_final_id: row.producto_final_id,
                    fecha_entrada: row.fecha_entrada,
                    proveedor: row.proveedor,
                    numero_albaran: row.numero_albaran,
                    numero_lote: row.numero_lote,
                    cantidad_kg: row.cantidad_kg,
                    fecha_caducidad: row.fecha_caducidad,
                    envasado: {
                        id: row.envasado_id,
                        nombre: row.envasado_nombre
                    },
                    operario: {
                        id: row.operario_id,
                        nombre: row.operario_nombre
                    },
                    proyecto: {
                        id: row.proyecto_id,
                        nombre: row.proyecto_nombre,
                        nif: row.proyecto_nif,
                        direccion: row.proyecto_direccion,
                        codigo_postal: row.proyecto_codigo_postal,
                        poblacion: row.proyecto_poblacion,
                        telefono: row.proyecto_telefono,
                        correo_electronico: row.proyecto_correo_electronico,
                        logo: row.proyecto_logo
                    }
                }));
                resultHandler(
                    { status: STATUS_OK, success: true, result: entradas },
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
                const entradas: getEntradasInterface[] = results.map((row: any) => ({
                    id: row.id,
                    producto_final_id: row.producto_final_id,
                    fecha_entrada: row.fecha_entrada,
                    proveedor: row.proveedor,
                    numero_albaran: row.numero_albaran,
                    numero_lote: row.numero_lote,
                    cantidad_kg: row.cantidad_kg,
                    fecha_caducidad: row.fecha_caducidad,
                    envasado: {
                        id: row.envasado_id,
                        nombre: row.envasado_nombre
                    },
                    operario: {
                        id: row.operario_id,
                        nombre: row.operario_nombre
                    },
                    proyecto: {
                        id: row.proyecto_id,
                        nombre: row.proyecto_nombre,
                        nif: row.proyecto_nif,
                        direccion: row.proyecto_direccion,
                        codigo_postal: row.proyecto_codigo_postal,
                        poblacion: row.proyecto_poblacion,
                        telefono: row.proyecto_telefono,
                        correo_electronico: row.proyecto_correo_electronico,
                        logo: row.proyecto_logo
                    }
                }));
                resultHandler(
                    { status: STATUS_OK, success: true, result: entradas },
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
                const entradas: getEntradasInterface[] = results.map((row: any) => ({
                    id: row.id,
                    producto_final_id: row.producto_final_id,
                    fecha_entrada: row.fecha_entrada,
                    proveedor: row.proveedor,
                    numero_albaran: row.numero_albaran,
                    numero_lote: row.numero_lote,
                    cantidad_kg: row.cantidad_kg,
                    fecha_caducidad: row.fecha_caducidad,
                    envasado: {
                        id: row.envasado_id,
                        nombre: row.envasado_nombre
                    },
                    operario: {
                        id: row.operario_id,
                        nombre: row.operario_nombre
                    },
                    proyecto: {
                        id: row.proyecto_id,
                        nombre: row.proyecto_nombre,
                        nif: row.proyecto_nif,
                        direccion: row.proyecto_direccion,
                        codigo_postal: row.proyecto_codigo_postal,
                        poblacion: row.proyecto_poblacion,
                        telefono: row.proyecto_telefono,
                        correo_electronico: row.proyecto_correo_electronico,
                        logo: row.proyecto_logo
                    }
                }));
                resultHandler(
                    { status: STATUS_OK, success: true, result: entradas },
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
                const entradas: getEntradasInterface[] = results.map((row: any) => ({
                    id: row.id,
                    producto_final_id: row.producto_final_id,
                    fecha_entrada: row.fecha_entrada,
                    proveedor: row.proveedor,
                    numero_albaran: row.numero_albaran,
                    numero_lote: row.numero_lote,
                    cantidad_kg: row.cantidad_kg,
                    fecha_caducidad: row.fecha_caducidad,
                    envasado: {
                        id: row.envasado_id,
                        nombre: row.envasado_nombre
                    },
                    operario: {
                        id: row.operario_id,
                        nombre: row.operario_nombre
                    },
                    proyecto: {
                        id: row.proyecto_id,
                        nombre: row.proyecto_nombre,
                        nif: row.proyecto_nif,
                        direccion: row.proyecto_direccion,
                        codigo_postal: row.proyecto_codigo_postal,
                        poblacion: row.proyecto_poblacion,
                        telefono: row.proyecto_telefono,
                        correo_electronico: row.proyecto_correo_electronico,
                        logo: row.proyecto_logo
                    }
                }));
                resultHandler(
                    { status: STATUS_OK, success: true, result: entradas },
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
                const entradas: getEntradasInterface[] = results.map((row: any) => ({
                    id: row.id,
                    producto_final_id: row.producto_final_id,
                    fecha_entrada: row.fecha_entrada,
                    proveedor: row.proveedor,
                    numero_albaran: row.numero_albaran,
                    numero_lote: row.numero_lote,
                    cantidad_kg: row.cantidad_kg,
                    fecha_caducidad: row.fecha_caducidad,
                    envasado: {
                        id: row.envasado_id,
                        nombre: row.envasado_nombre
                    },
                    operario: {
                        id: row.operario_id,
                        nombre: row.operario_nombre
                    },
                    proyecto: {
                        id: row.proyecto_id,
                        nombre: row.proyecto_nombre,
                        nif: row.proyecto_nif,
                        direccion: row.proyecto_direccion,
                        codigo_postal: row.proyecto_codigo_postal,
                        poblacion: row.proyecto_poblacion,
                        telefono: row.proyecto_telefono,
                        correo_electronico: row.proyecto_correo_electronico,
                        logo: row.proyecto_logo
                    }
                }));
                resultHandler(
                    { status: STATUS_OK, success: true, result: entradas },
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
