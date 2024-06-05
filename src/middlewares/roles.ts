import { Request, Response, NextFunction } from "express";
import pool from "@config/db";

import { getUserWithPermissionsService } from "@services/permisosService";

async function getUserPermissions(userId: number): Promise<string[]> {
    const result = await pool.query(getUserWithPermissionsService, [userId]);
    const permissions = new Set<string>();

    result.rows.forEach((row: any) => {
        if (row.permiso_nombre) {
            permissions.add(row.permiso_nombre);
        }
    });

    return Array.from(permissions);
}

async function checkPermission(requiredPermission: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const userId = (req as any).user.id;
        const userPermissions = await getUserPermissions(userId);

        if (userPermissions.includes(requiredPermission)) {
            next();
        } else {
            res.status(403).json({ message: "No tienes permisos suficientes para acceder a esta ruta" });
        }
    };
}

export { checkPermission };
