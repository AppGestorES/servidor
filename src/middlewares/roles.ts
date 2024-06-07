import { Request, Response, NextFunction } from "express";
import pool from "@config/db";
import jwt, { Jwt, JwtPayload } from "jsonwebtoken";

import { getUserWithPermissionsService } from "@services/permisosService";

async function getUserPermissions(userId: number): Promise<string[]> {
    const result = await pool.query(getUserWithPermissionsService, [userId]);
    console.log(result);
    const permissions = new Set<string>();

    if(result.length > 0){
        result.rows.forEach((row: any) => {
            if (row.permiso_nombre) {
                permissions.add(row.permiso_nombre);
            }
        });
    }

    return Array.from(permissions);
}

function checkPermission(requiredPermission: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
        
        const token = req.headers.authorization;
        const secret = process.env.JWT_SECRET;
        const decoded = jwt.verify(token!, secret!) as JwtPayload;

        const userId = decoded.usuario.id;

        console.log(userId)
        const userPermissions = await getUserPermissions(userId);

        console.log(userPermissions);

        if (userPermissions.includes(requiredPermission)) {
            next();
        } else {
            res.status(403).json({ message: "No tienes permisos suficientes para acceder a esta ruta" });
        }
    };
}

export { checkPermission };