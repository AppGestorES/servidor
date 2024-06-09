import { DuplicateEntryError, PrimaryKeyEntryError, ForeignKeyEntryError } from "@middlewares/appError";
import { Request, Response, NextFunction } from "express";

const tryCatch =
    (controller: any) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await controller(req, res, next);
        } catch (error: any) {
            switch(error.code){
                case "ER_DUP_ENTRY":
                    return next(new DuplicateEntryError("El usuario ya existe. " + error.sqlMessage));
                case "ER_ROW_IS_REFERENCED_2":
                    return next(new PrimaryKeyEntryError("La clave principal está siendo usada. " + error.sqlMessage));
                case "ER_NO_REFERENCED_ROW_2":
                    console.log(error)
                    return next(new ForeignKeyEntryError("La clave foránea no existe. " + error.sqlMessage));
            }
            console.log(error);
            return next(error);
        }
    };


const tryCatchDefault =
    <T>(fn: (...args: any[]) => Promise<T>) =>
    async (...args: any[]): Promise<T> => {
        try {
            return await fn(...args);
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

export default tryCatch;
export { tryCatchDefault };
