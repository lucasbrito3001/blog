import { IPostRepository } from "../../../adapters/repositories/post/post.repository.interface";
import { IReadPosts } from "./readPosts.usecase.interface";

export class ReadPostsUseCase implements IReadPosts {
    public limit
    public offset
    public postRepository

    constructor(postRepository: IPostRepository, limit: number, offset: number) {
        this.limit = limit
        this.offset = offset
        this.postRepository = postRepository;
    }

    async execute() {
        try {
            const { status, content, message, error } = await this.postRepository.getPosts(this.limit * this.offset, this.limit)
            
            console.log(error)
            if(!status) throw new Error(error)

            return { status: true, content, message }
        } catch (error) {
            const errorMessage: any = error

            return { status: false, error: errorMessage.message ? errorMessage.message : 'error' }
        }   
    }
}