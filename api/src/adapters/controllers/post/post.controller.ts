import { NextFunction, Request, Response } from "express"
import { ICreatePost } from "../../../usecases/post/createPost/createPost.usecase.interface"
import { IReadPosts } from "../../../usecases/post/readPosts/readPosts.usecase.interface"

export class PostController {
    public createPostUseCase
    public readPostsUseCase

    constructor(createPostUseCase: ICreatePost, readPostsUseCase: IReadPosts) {
        this.createPostUseCase = createPostUseCase
        this.readPostsUseCase = readPostsUseCase
    }

    createOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { title, subtitle, creationDate } = req.body
            
            if(!title || !subtitle || !creationDate) throw new Error('MISSING_INFORMATIONS')

            const { status, error, message } = await this.createPostUseCase.execute({ title, subtitle, creationDate, likes: 0 })

            if(!status) throw new Error(error)

            res.responseTemplateKey = 'POST_CREATED'
        } catch (error: any) {
            res.responseTemplateKey = error.message || 'INTERNAL_CONTROLLER_ERROR'
        }

        next()
    }

    readAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let { page: pageQuery, limit: limitQuery, title: titleQuery } = req.query
    
            let page: number = parseInt(typeof pageQuery === 'string' ? pageQuery : '0')
            let limit: number = parseInt(typeof limitQuery === 'string' ? limitQuery : '12')
            let title: string = '' + (titleQuery || '')

            const { status, message, content, error } = await this.readPostsUseCase.execute(page, limit, title)

            if(!status) throw new Error(error)
    
            res.responseContent = content || []
            res.responseTemplateKey = 'READ_POSTS_OK'
        } catch (error: any) {
            res.responseTemplateKey = error.message || 'INTERNAL_CONTROLLER_ERROR'
        }

        next()
    }
}