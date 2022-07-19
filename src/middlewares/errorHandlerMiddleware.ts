import { NextFunction, Request, Response } from "express";

import { errorType } from "../utils/errorTypeUtils.js";

export function errorHandler(error, req : Request, res : Response, next : NextFunction) {
    console.error(error);

    const errorThrow = errorType(error);

    return res.status(errorThrow.status).send(errorThrow.message);
};