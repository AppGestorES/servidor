import { Request, Response, NextFunction } from "express";
import {
    ValidationError,
    NotFoundError,
    UnauthorizedError,
} from "@middlewares/appError";

const errorHandler = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (error instanceof ValidationError) {
        return res.status(error.statusCode).send({
            type: error.name,
            details: error.message,
        });
    }

    if (error instanceof NotFoundError || error instanceof UnauthorizedError) {
        return res.status(error.statusCode).json({
            error: error.name,
            message: error.message,
        });
    }

    return res.status(500).send({ status: 500, success: false, error: "Internal Server Error" });
};

export default errorHandler;
