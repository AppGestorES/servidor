import { Response } from "express";
import { PoolConnection } from "mariadb";
import Result from "@interfaces/result";

const STATUS_OK: number = 200;
const STATUS_NOT_FOUND: number = 404;

const resultHandler = (
    result: Result,
    res: Response,
    conn: PoolConnection | undefined = undefined
) => {
    if (conn) conn.end();

    const safeResult = JSON.parse(JSON.stringify(result, (_, v) => typeof v === 'bigint' ? v.toString() : v));
    res.status(safeResult.status).json(safeResult);
};

export { resultHandler, STATUS_OK, STATUS_NOT_FOUND };
