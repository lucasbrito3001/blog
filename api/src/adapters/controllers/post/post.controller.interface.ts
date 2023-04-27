import { NextFunction, Request, Response } from "express"

export interface IPostController {
    readOne: (req: Request, res: Response, next: NextFunction) => Promise<void>
    readAll: (req: Request, res: Response, next: NextFunction) => Promise<void>
    createOne: (req: Request, res: Response, next: NextFunction) => Promise<void>
    // updateOne: () => Promise<boolean>
    // deleteOne: () => Promise<boolean>
}