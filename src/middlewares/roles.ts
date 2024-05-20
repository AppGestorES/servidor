import { Request, Response, NextFunction } from "express";
import { resultHandler, STATUS_NO_ACCESS } from "@middlewares/resultHandler";

const forbidden = ((res: Response) => {
    return resultHandler(
        {
            status: STATUS_NO_ACCESS,
            success: false,
            result: "Acceso denegado.",
        },
        res
    );
})

function admin(req: Request, res: Response, next: NextFunction) {
    if (req.user && req.user.rol < 20) return forbidden(res);
    next();
}

function viewer(req: Request, res: Response, next: NextFunction) {
    if (!req.user || !req.user.rol && req.user.rol != 0) return forbidden(res);
    next();
}

function self(req: Request, res: Response, next: NextFunction) {
    if (!req.user || req.body.id_usuario != req.user.id && req.user.rol < 20) return forbidden(res);
    next();
}

module.exports = { admin, viewer, self };