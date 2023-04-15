import { IPostRepository } from "../../../adapters/repositories/post/post.repository.interface"
import { IPostEntity } from "../../../entities/post/post.entity.interface"
import { IPostDTO } from "../../../interfaces/dto/post.interface.dto"
import { ICreatePost } from "./createPost.usecase.interface"

export class CreatePostUseCase implements ICreatePost {
    public postRepository
    public postEntity

    constructor(entity: IPostEntity, repository: IPostRepository) {
        this.postEntity = entity
        this.postRepository = repository
    }

    execute = async (post: IPostDTO) => {
        try {
            const postEntity = this.postEntity.create(post)
            
            if("error" in postEntity) throw new Error(postEntity.error) 

            const resultCreatePost = await this.postRepository.createPost()

            console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT: ", resultCreatePost)

            if(!resultCreatePost.status) throw new Error(resultCreatePost.error)

            return { status: true, message: 'Post created successfully' }
        } catch (error) {
            console.log(error)
            const errorMessage: any = error

            return { status: false, error: errorMessage.message ? errorMessage.message : 'error' }
        }
    }
}