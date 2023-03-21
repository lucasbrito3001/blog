import { IPostRepository } from "../../../adapters/repositories/post/post.repository.interface"
import { IPostEntity } from "../../../entities/post/post.entity.interface"
import { IPostDTO } from "../../../interfaces/dto/post.interface.dto"
import { ICreatePost } from "./createPost.usecase.interface"

export class CreatePostUseCase implements ICreatePost {
    public post
    public postRepository
    public postEntity

    constructor(post: IPostDTO, entity: IPostEntity, repository: IPostRepository) {
        this.post = post
        this.postEntity = entity
        this.postRepository = repository
    }

    async execute() {
        const postEntity = this.postEntity.create()

        try {
            if("error" in postEntity) throw new Error(postEntity.error) 

            const isPostCreated = await this.postRepository.createPost()

            if(!isPostCreated.status) throw new Error('Erro ao criar post, verificar com administrador')

            return { status: true, message: 'ok' }
        } catch (error) {
            const errorMessage: any = error

            return { status: false, error: errorMessage.message ? errorMessage.message : 'error' }
        }
    }
}