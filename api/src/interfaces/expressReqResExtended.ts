import { Request, Response } from "express";

export interface RequestExtended extends Request {
    hash: string
}

export interface ResponseExtended extends Response {
    errorKey: string
}