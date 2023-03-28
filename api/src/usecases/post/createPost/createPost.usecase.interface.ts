import { IPostRepository } from "../../../adapters/repositories/post/post.repository.interface";
import { ICreatePostResponse } from "../../../interfaces/createPost.interface";
import { IPostDTO } from "../../../interfaces/dto/post.interface.dto";

export interface ICreatePost {
    post: IPostDTO
    postRepository: IPostRepository

    execute: () => Promise<ICreatePostResponse>
}