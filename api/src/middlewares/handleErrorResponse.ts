import { NextFunction, Request, Response } from "express";
import { RESPONSE_TEMPLATES_DICTIONARY } from "../constants/responseTemplates";

const RESPONSE_TEMPLATE_DEFAULT = {
    httpStatusCode: 500,
    data: { status: false, errors: ['Internal server error, please contact an administrator'] }
}

export function handleResponse(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const { httpStatusCode, data } = RESPONSE_TEMPLATES_DICTIONARY[res.responseTemplateKey] || RESPONSE_TEMPLATE_DEFAULT
        res.status(httpStatusCode).json(data)
    } catch (error) {
        console.log("[ERROR] Error to handle response:\n", error)

        const { httpStatusCode, data } = RESPONSE_TEMPLATE_DEFAULT
        res.status(httpStatusCode).json(data)
    }
}