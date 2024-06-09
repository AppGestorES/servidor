import { Request, Response, NextFunction } from "express";

import tryCatch from "@utils/tryCatch";
import { resultHandler } from "@middlewares/resultHandler";

export default async function HealthCheck(
    req: Request,
    res: Response,
    next: NextFunction
) {
    await tryCatch(async (req: Request, res: Response, next: NextFunction) => {
        resultHandler({ status: 200, success: true, result: "OK TEST" }, res);
    })(req, res, next);
}
