import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import tryCatch from "@utils/tryCatch";
import { STATUS_OK, resultHandler } from "@middlewares/resultHandler";

import {
    getGruposService,
    getPermisosService,
    getGruposPermisosService,
    postGruposService,
    postGruposPermisosService,
    postUsuariosGruposService,
    postUsuariosPermisosService,
} from "@services/permisosService";
import {
    postGrupoInterface,
    postGrupoPermisoInterface,
    postUsuarioGrupoInterface,
    postUsuarioPermisoInterface,
} from "@interfaces/permisos.interface";

export class PermissionsController {
    async getGrupos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getGruposService);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getPermisos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getPermisosService);
                resultHandler(
                    { status: STATUS_OK, success: true, result: results },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async getGruposConPermisos(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const results = await conn.query(getGruposPermisosService);

                const grupos = results.reduce((acc: any[], curr: any) => {
                    let grupo = acc.find(g => g.id === curr.grupo_id);
                    if (!grupo) {
                        grupo = {
                            id: curr.grupo_id,
                            nombre: curr.grupo_nombre,
                            permisos: [],
                        };
                        acc.push(grupo);
                    }
                    if (curr.permiso_id) {
                        grupo.permisos.push({
                            id: curr.permiso_id,
                            nombre: curr.permiso_nombre,
                            descripcion: curr.permiso_descripcion,
                        });
                    }
                    return acc;
                }, []);

                resultHandler(
                    { status: STATUS_OK, success: true, result: grupos },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }
    
    async createGrupo(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { nombre, id_proyecto } = req.body as postGrupoInterface;
                const results = await conn.query(postGruposService, [
                    nombre,
                    id_proyecto,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: "Grupo creado" },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async assignPermisoToGrupo(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { grupo_id, permiso_id, id_proyecto } = req.body as postGrupoPermisoInterface;
                const results = await conn.query(postGruposPermisosService, [
                    grupo_id,
                    permiso_id,
                    id_proyecto,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: "Permiso asignado al grupo" },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async assignGrupoToUsuario(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { usuario_id, grupo_id, id_proyecto } = req.body as postUsuarioGrupoInterface;
                const results = await conn.query(postUsuariosGruposService, [
                    usuario_id,
                    grupo_id,
                    id_proyecto,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: "Grupo asignado al usuario" },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }

    async assignPermisoToUsuario(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                const conn = await pool.getConnection();
                const { usuario_id, permiso_id, id_proyecto } = req.body as postUsuarioPermisoInterface;
                const results = await conn.query(postUsuariosPermisosService, [
                    usuario_id,
                    permiso_id,
                    id_proyecto,
                ]);
                resultHandler(
                    { status: STATUS_OK, success: true, result: "Permiso asignado al usuario" },
                    res,
                    conn
                );
            }
        )(req, res, next);
    }
}
