import { NextFunction, Request, Response } from "express"
import { ICreatePost } from "../../../usecases/post/createPost/createPost.usecase.interface"
import { ERRORS_DICTIONARY } from "../../../constants/errors"
import { RequestExtended, ResponseExtended } from "../../../interfaces/expressReqResExtended"

export class PostController {
    public createPostUseCase

    constructor(createPostUseCase: ICreatePost) {
        this.createPostUseCase = createPostUseCase
    }

    async createPost(req: RequestExtended, res: ResponseExtended, next: NextFunction) {
        try {
            const { title, subtitle, creationDate } = req.body
            
            if(!title || !subtitle || !creationDate) throw new Error('MISSING_INFORMATIONS')

            const { status, error, message } = await this.createPostUseCase.execute()

            return res.status(201).json({ status, message: 'Post created succesfully' })
        } catch (error) {
            if(error instanceof Error) {
                console.log(error.message)
                res.errorKey = error.message
            } 

            next()
        }
    }
}