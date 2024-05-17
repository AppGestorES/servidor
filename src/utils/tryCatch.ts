import { Request, Response, NextFunction } from "express";

const tryCatch =
    (controller: any) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await controller(req, res);
        } catch (error) {
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
