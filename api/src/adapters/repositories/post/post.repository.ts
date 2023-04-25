import { DataSource, EntityManager } from "typeorm";
import { IPostRepository } from "./post.repository.interface";
import { IPostDTO } from "../../../interfaces/dto/post.interface.dto";
import { Post } from "../../../main/database/entity/post.entity";

type MockDataSourceRepository = {
    find: () => any[],
    save: () => boolean
}

type MockDataSource = {
    getRepository(entity: typeof Post | string): MockDataSourceRepository
}

export class PostRepository implements IPostRepository {
    private dataSourceRepository

    constructor(dataSource: DataSource | MockDataSource, entity: typeof Post | string) {
        this.dataSourceRepository = dataSource.getRepository(entity)
    }

    createPost = async (post: IPostDTO) => {
        try {
            await this.dataSourceRepository.save(post)
            return { status: true }
        } catch (error: any) {
            return { status: false, error: error.code || "REPOSITORY_FAILED" }
        }
    }

    getPosts = async (offset: number, limit: number) => {
        try {
            const posts = await this.dataSourceRepository.find({
                skip: offset,
                take: limit
            })
    
            return { status: true, content: posts }
        } catch (error: any) {
            return { status: false, error: error.code || "REPOSITORY_FAILED" }
        }
    }
}