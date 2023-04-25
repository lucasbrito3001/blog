import { IPostRepository } from "../../../adapters/repositories/post/post.repository.interface";
import { IReadPosts } from "./readPosts.usecase.interface";

export class ReadPostsUseCase implements IReadPosts {
    public postRepository

    constructor(postRepository: IPostRepository) {
        this.postRepository = postRepository;
    }

    async execute(page: number, limit: number) {
        try {
            const { status, content, message, error } = await this.postRepository.getPosts(limit * page, limit)
            
            if(!status) throw new Error(error)

            return { status: true, content, message }
        } catch (error: any) {
            return { status: false, error: error.message || 'INTERNAL_USECASE_ERROR' }
        }   
    }
}