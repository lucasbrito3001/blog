import { NextFunction, Request, Response } from "express"

export interface IPostController {
    // readOne: () => Promise<IPost>
    // readAll: () => Promise<IPost[]>
    createOne: (req: Request, res: Response, next: NextFunction) => Promise<void>
    // updateOne: () => Promise<boolean>
    // deleteOne: () => Promise<boolean>
}