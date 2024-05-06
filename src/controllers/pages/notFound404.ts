import { Request, Response, NextFunction } from "express";

import tryCatch from "@utils/tryCatch";
import {resultHandler, STATUS_NOT_FOUND} from "@middlewares/resultHandler";

export default function NotFound404(req: Request, res: Response, next: NextFunction) {
    tryCatch(async (req: Request, res: Response, next: NextFunction) => {
        resultHandler({ status: STATUS_NOT_FOUND, success: false, result: "Página no encontrada" }, res);
    })(req, res, next);
}
