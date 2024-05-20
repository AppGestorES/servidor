import { Request, Response, NextFunction } from "express";
import {
    ValidationError,
    NotFoundError,
    UnauthorizedError,
    DuplicateEntryError
} from "@middlewares/appError";
import {resultHandler} from "@middlewares/resultHandler";

const errorHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (error instanceof ValidationError) {
        resultHandler({ status: error.statusCode, success: false, result: error.message }, res);
    }

    if (error instanceof DuplicateEntryError) {
        resultHandler({ status: error.statusCode, success: false, result: error.message }, res);
    }

    if (error instanceof NotFoundError || error instanceof UnauthorizedError) {
        resultHandler({ status: error.statusCode, success: false, result: error.message }, res);
    }

    if (!res.headersSent) {
        resultHandler({ status: 500, success: false, result: "Error interno del servidor" }, res);
    }

};

export default errorHandler;
