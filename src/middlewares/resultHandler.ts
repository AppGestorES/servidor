import express, { Request, Response, NextFunction } from "express";
import Result from "@interfaces/result";

const resultHandler = (result: Result, res: Response) => {
    res.status(result.status).json(result);
};

export default resultHandler;