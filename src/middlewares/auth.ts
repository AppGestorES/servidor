import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

import { STATUS_NO_TOKEN, resultHandler } from "@middlewares/resultHandler";

module.exports = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("x-auth-token");

    if (!token)
        resultHandler(
            {
                status: STATUS_NO_TOKEN,
                success: false,
                result: "No se ha proporcionado un token.",
            },
            res
        );

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
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

    next();
};
