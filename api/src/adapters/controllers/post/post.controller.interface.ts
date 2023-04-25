import { NextFunction, Request, Response } from "express"
import { IReadPostsResponse } from "../../../interfaces/readPosts.interface"

export interface IPostController {
    // readOne: () => Promise<IPost>
    readAll: (req: Request, res: Response, next: NextFunction) => Promise<void>
    createOne: (req: Request, res: Response, next: NextFunction) => Promise<void>
    // updateOne: () => Promise<boolean>
    // deleteOne: () => Promise<boolean>
}