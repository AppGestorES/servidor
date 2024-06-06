import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { STATUS_NO_TOKEN, resultHandler } from "@middlewares/resultHandler";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
        return resultHandler(
            {
                status: STATUS_NO_TOKEN,
                success: false,
                result: "No se ha proporcionado un token.",
            },
            res
        );
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
        return resultHandler(
            {
                status: STATUS_NO_TOKEN,
                success: false,
                result: "No se ha configurado el secreto de JWT.",
            },
            res
        );
    }

    try {
        const decoded = jwt.verify(token, secret);
        if (typeof decoded === 'string') {
            return resultHandler(
                {
                    status: STATUS_NO_TOKEN,
                    success: false,
                    result: "El token no es válido.",
                },
                res
            );
        }

        (req as any).user = decoded as JwtPayload;
        next();
    } catch (error) {
        return resultHandler(
            {
                status: STATUS_NO_TOKEN,
                success: false,
                result: "El token ha expirado.",
            },
            res
        );
    }
};

export { authMiddleware };