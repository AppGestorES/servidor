import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    getSalidasService,
    getSalidasByProductoFinalService,
    getSalidasByFechaSalidaService,
    getSalidasByProyectoService,
    postSalidasService,
    putSalidasService,
    deleteSalidasService,
} from "@services/salidaProductosService";
import {
    postSalidaProductosInterface,
    putSalidaProductosInterface,
    getSalidaProductosInterface,
} from "@interfaces/salidaProductos.interface";

export class SalidaProductos {
    async getSalidas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getSalidasService);
                const salidas: getSalidaProductosInterface[] = results.map(
                    (row: any) => ({
                        id: row.id,
                        producto_final_id: row.producto_final_id,
                        formula_id: row.formula_id,
                        numero_lote: row.numero_lote,
                        fecha_salida: row.fecha_salida,
                        cantidad: row.cantidad,
                        fecha_caducidad: row.fecha_caducidad,
                        envasado_id: {
                            id: row.envasado_id,
                            nombre: row.envasado_nombre,
                        },
                        formato_id: {
                            id: row.formato_id,
                            nombre: row.formato_nombre,
                        },
                        destino_id: {
                            id: row.destino_id,
                            nombre: row.destino_nombre,
                        },
                        vehiculo_id: {
                            id: row.vehiculo_id,
                            matricula: row.vehiculo_matricula,
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
                            logo: row.proyecto_logo,
                        },
                    })
                );
                resultHandler(
                    { status: STATUS_OK, success: true, result: salidas },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getSalidasByProductoFinal(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const producto_final_id = req.params.producto_final_id;
                const results = await conn.query(
                    getSalidasByProductoFinalService,
                    [producto_final_id]
                );
                const salidas: getSalidaProductosInterface[] = results.map(
                    (row: any) => ({
                        id: row.id,
                        producto_final_id: row.producto_final_id,
                        formula_id: row.formula_id,
                        numero_lote: row.numero_lote,
                        fecha_salida: row.fecha_salida,
                        cantidad: row.cantidad,
                        fecha_caducidad: row.fecha_caducidad,
                        envasado_id: {
                            id: row.envasado_id,
                            nombre: row.envasado_nombre,
                        },
                        formato_id: {
                            id: row.formato_id,
                            nombre: row.formato_nombre,
                        },
                        destino_id: {
                            id: row.destino_id,
                            nombre: row.destino_nombre,
                        },
                        vehiculo_id: {
                            id: row.vehiculo_id,
                            matricula: row.vehiculo_matricula,
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
                            logo: row.proyecto_logo,
                        },
                    })
                );
                resultHandler(
                    { status: STATUS_OK, success: true, result: salidas },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getSalidasByFechaSalida(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const fecha_salida = req.params.fecha_salida;
                const results = await conn.query(
                    getSalidasByFechaSalidaService,
                    [fecha_salida]
                );
                const salidas: getSalidaProductosInterface[] = results.map(
                    (row: any) => ({
                        id: row.id,
                        producto_final_id: row.producto_final_id,
                        formula_id: row.formula_id,
                        numero_lote: row.numero_lote,
                        fecha_salida: row.fecha_salida,
                        cantidad: row.cantidad,
                        fecha_caducidad: row.fecha_caducidad,
                        envasado_id: {
                            id: row.envasado_id,
                            nombre: row.envasado_nombre,
                        },
                        formato_id: {
                            id: row.formato_id,
                            nombre: row.formato_nombre,
                        },
                        destino_id: {
                            id: row.destino_id,
                            nombre: row.destino_nombre,
                        },
                        vehiculo_id: {
                            id: row.vehiculo_id,
                            matricula: row.vehiculo_matricula,
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
                            logo: row.proyecto_logo,
                        },
                    })
                );
                resultHandler(
                    { status: STATUS_OK, success: true, result: salidas },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getSalidasByProyecto(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const id_proyecto = req.params.id_proyecto;
                const results = await conn.query(getSalidasByProyectoService, [
                    id_proyecto,
                ]);
                const salidas: getSalidaProductosInterface[] = results.map(
                    (row: any) => ({
                        id: row.id,
                        producto_final_id: row.producto_final_id,
                        formula_id: row.formula_id,
                        numero_lote: row.numero_lote,
                        fecha_salida: row.fecha_salida,
                        cantidad: row.cantidad,
                        fecha_caducidad: row.fecha_caducidad,
                        envasado_id: {
                            id: row.envasado_id,
                            nombre: row.envasado_nombre,
                        },
                        formato_id: {
                            id: row.formato_id,
                            nombre: row.formato_nombre,
                        },
                        destino_id: {
                            id: row.destino_id,
                            nombre: row.destino_nombre,
                        },
                        vehiculo_id: {
                            id: row.vehiculo_id,
                            matricula: row.vehiculo_matricula,
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
                            logo: row.proyecto_logo,
                        },
                    })
                );
                resultHandler(
                    { status: STATUS_OK, success: true, result: salidas },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async postSalidas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const {
                    producto_final_id,
                    formula_id,
                    numero_lote,
                    fecha_salida,
                    cantidad,
                    fecha_caducidad,
                    envasado_id,
                    formato_id,
                    destino_id,
                    vehiculo_id,
                    id_proyecto,
                } = req.body as postSalidaProductosInterface;
                const results = await conn.query(postSalidasService, [
                    producto_final_id,
                    formula_id,
                    numero_lote,
                    fecha_salida,
                    cantidad,
                    fecha_caducidad,
                    envasado_id,
                    formato_id,
                    destino_id,
                    vehiculo_id,
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

    async putSalidas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const {
                    producto_final_id,
                    formula_id,
                    numero_lote,
                    fecha_salida,
                    cantidad,
                    fecha_caducidad,
                    envasado_id,
                    formato_id,
                    destino_id,
                    vehiculo_id,
                    id_proyecto,
                } = req.body as putSalidaProductosInterface;
                const { id } = req.params;
                const results = await conn.query(putSalidasService, [
                    producto_final_id,
                    formula_id,
                    numero_lote,
                    fecha_salida,
                    cantidad,
                    fecha_caducidad,
                    envasado_id,
                    formato_id,
                    destino_id,
                    vehiculo_id,
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

    async deleteSalidas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { id } = req.params;
                const results = await conn.query(deleteSalidasService, [id]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }
}
