import { Request, Response, NextFunction } from "express";

import tryCatch from "@utils/tryCatch";
import { resultHandler } from "@middlewares/resultHandler";

interface Hola{
    nombre: string;
}

export class MateriasPrimas {
    async getMateriasPrimas(req: Request, res: Response, next: NextFunction) {
        await tryCatch(
            async (req: Request, res: Response, next: NextFunction) => {
                resultHandler(
                    { status: 200, success: true, result: "OK" },
                    res
                );
            }
        )(req, res, next);
    }

    esTipoHola(obj: any): obj is Hola {
        return obj && typeof obj.mensaje === 'string';
    }

    validateBody(req: Request, res: Response, next: NextFunction, esTipo: Function) {
        if(!req.body || esTipo(req.body)){
            next();
        } else {
            resultHandler(
                { status: 400, success: false, result: "Bad Request" },
                res
            );
        }
    }

    // validateBody(req: Request, res: Response, next: NextFunction) {
    //     if (!req.body || req.body typeof Hola) {
    //         resultHandler(
    //             { status: 400, success: false, result: "Bad Request" },
    //             res
    //         );
    //     } else {
    //         next();
    //     }
    // }
}
