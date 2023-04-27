import { IPostRepository } from "../../../adapters/repositories/post/post.repository.interface";
import { IReadPost } from "./readPost.usecase.interface";

export class ReadPostUseCase implements IReadPost {
    public postRepository

    constructor(postRepository: IPostRepository) {
        this.postRepository = postRepository;
    }

    async execute(id: number) {
        try {
            if(!id) throw new Error('MISSING_ID')

            const { status, content, message, error } = await this.postRepository.getPost(id)
            
            if(!status) throw new Error(error)

            return { status: true, content, message }
        } catch (error: any) {
            return { status: false, error: error.message || 'INTERNAL_USECASE_ERROR' }
        }   
    }
}