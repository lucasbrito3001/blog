import { DataSource, EntityManager } from "typeorm";
import { IPostRepository } from "./post.repository.interface";
import { IPostDTO } from "../../../interfaces/dto/post.interface.dto";
import { Post } from "../../../main/database/entity/post.entity";

export class PostRepository implements IPostRepository {
    private dataSourceRepository

    constructor(dataSource: DataSource, entity: typeof Post) {
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
}