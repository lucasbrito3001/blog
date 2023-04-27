import { NextFunction, Request, Response } from "express"
import { ICreatePost } from "../../../usecases/post/createPost/createPost.usecase.interface"
import { IReadPosts } from "../../../usecases/post/readPosts/readPosts.usecase.interface"
import { IReadPost } from "../../../usecases/post/readPost/readPost.usecase.interface"

export class PostController {
    private createPostUseCase
    private readPostsUseCase
    private readPostUseCase

    constructor(
        createPostUseCase: ICreatePost,
        readPostsUseCase: IReadPosts,
        readPostUseCase: IReadPost
    ) {
        this.createPostUseCase = createPostUseCase
        this.readPostsUseCase = readPostsUseCase
        this.readPostUseCase = readPostUseCase
    }

    createOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { title, subtitle, creationDate } = req.body
            
            if(!title || !subtitle || !creationDate) throw new Error('MISSING_INFORMATIONS')

            const { status, error, message } = await this.createPostUseCase.execute({ title, subtitle, creationDate, likes: 0 })

            if(!status) throw new Error(error)

            res.responseTemplateKey = 'CREATED'
        } catch (error: any) {
            res.responseTemplateKey = error.message || 'INTERNAL_CONTROLLER_ERROR'
        }

        next()
    }

    readOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params

            if(!id) throw new Error('MISSING_ID')

            const { status, error, message, content } = await this.readPostUseCase.execute(parseInt(id))

            if(!status) throw new Error(error)

            res.responseTemplateKey = content ? 'OK' : 'NOT_FOUND_BY_KEY'
            res.responseContent = content || null
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
    
            res.responseTemplateKey = 'OK'
            res.responseContent = content || []
        } catch (error: any) {
            res.responseTemplateKey = error.message || 'INTERNAL_CONTROLLER_ERROR'
        }

        next()
    }
}