import { NextFunction, Request, Response } from "express"
import { ICreatePost } from "../../../usecases/post/createPost/createPost.usecase.interface"

export class PostController {
    public createPostUseCase

    constructor(createPostUseCase: ICreatePost) {
        this.createPostUseCase = createPostUseCase
    }

    createOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { title, subtitle, creationDate } = req.body
            
            if(!title || !subtitle || !creationDate) throw new Error('MISSING_INFORMATIONS')

            const { status, error, message } = await this.createPostUseCase.execute({ title, subtitle, creationDate, likes: 0 })

            if(!status) throw new Error(error)

            res.responseTemplateKey = 'POST_CREATED'
        } catch (error) {
            if(error instanceof Error) {
                console.log(error.message)
                res.responseTemplateKey = error.message
            } 
        }

        next()
    }
}