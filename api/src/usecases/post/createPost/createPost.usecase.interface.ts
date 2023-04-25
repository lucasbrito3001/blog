import { ICreatePostResponse } from "../../../interfaces/createPost.interface";
import { IPostDTO } from "../../../interfaces/dto/post.interface.dto";

export interface ICreatePost {
    execute: (post: IPostDTO) => Promise<ICreatePostResponse>
}