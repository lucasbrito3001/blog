import { NextFunction, Request, Response } from "express"

export enum RestAPIMethods {
    'get',
    'post',
    'put',
    'delete'
}

export type AnyFunction = (req: Request, res: Response, next: NextFunction) => Promise<void>

export type IRoutes = {
    method: keyof typeof RestAPIMethods
    endpoint: string
    controller: AnyFunction
    middlewares: AnyFunction[]
}