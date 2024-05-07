import { Response } from "express";
import { PoolConnection } from "mariadb";
import Result from "@interfaces/result";

const STATUS_OK: number = 200;
const STATUS_NOT_FOUND: number = 404;

const resultHandler = (
    result: Result,
    res: Response,
    conn: any = undefined
) => {
    if (conn) conn.end();
    res.status(result.status).json(result);
};

export { resultHandler, STATUS_OK, STATUS_NOT_FOUND };
