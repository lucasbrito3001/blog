import { DataSource, Like } from "typeorm";
import { IPostRepository } from "./post.repository.interface";
import { IPostDTO } from "../../../interfaces/dto/post.interface.dto";
import { Post } from "../../../main/database/entity/post.entity";

type MockDataSourceRepository = {
    find: () => any[],
    findOneBy: ({}: any) => any,
    save: () => boolean
}

type MockDataSource = {
    getRepository(entity: typeof Post | string): MockDataSourceRepository
}

export class PostRepository implements IPostRepository {
    private dataSourceRepository
    private likeOperator

    constructor(
        dataSource: DataSource | MockDataSource,
        entity: typeof Post | string,
        likeOperator: typeof Like | ((text: string) => string)
    ) {
        this.dataSourceRepository = dataSource.getRepository(entity)
        this.likeOperator = likeOperator
    }

    createPost = async (post: IPostDTO) => {
        try {
            await this.dataSourceRepository.save(post)
            return { status: true }
        } catch (error: any) {
            return { status: false, error: error.code || "REPOSITORY_FAILED" }
        }
    }

    getPosts = async (offset: number, limit: number, title?: string) => {
        try {
            if(offset === undefined || limit === undefined) throw new Error('MISSING_PAGINATION_INFORMATIONS')

            const posts = await this.dataSourceRepository.find({
                skip: offset,
                take: limit,
                order: { creationDate: 'DESC' },
                ...(title && { where: { title: this.likeOperator(`%${title || ''}%`) } })
            })
    
            return { status: true, content: posts }
        } catch (error: any) {
            return { status: false, error: error.code || error.message || "REPOSITORY_FAILED" }
        }
    }

    getPost = async (id: number) => {
        try {
            if(!id) throw new Error('MISSING_ID')

            const post = await this.dataSourceRepository.findOneBy({ id })

            return { status: true, content: post, message: 'ok' }
        } catch (error: any) {
            return { status: false, error: error.code || error.message || "REPOSITORY_FAILED" }
        }
    }
}