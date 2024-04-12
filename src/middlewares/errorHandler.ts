import { Request, Response, NextFunction } from 'express';

interface ErrorWithStatus extends Error {
    statusCode?: number;
}

const errorHandler = (err: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);

    const statusCode = err.statusCode || 500;
    res.status(statusCode);

    res.json({
        status: "error",
        statusCode: statusCode,
        message: err.message || 'Internal Server Error',
    });
};

export default errorHandler;
