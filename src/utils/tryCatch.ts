import { DuplicateEntryError } from "@middlewares/appError";
import { Request, Response, NextFunction } from "express";

const tryCatch =
    (controller: any) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await controller(req, res, next);
        } catch (error: any) {
            if (error.code === 'ER_DUP_ENTRY') {
                return next(new DuplicateEntryError("El usuario ya existe."));
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
