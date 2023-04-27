import { IPostDTO } from "../../../interfaces/dto/post.interface.dto"
import { IReadPostResponse } from "../../../interfaces/readPost.interface"
import { IReadPostsResponse } from "../../../interfaces/readPosts.interface"

export interface IPostRepository {
    createPost: (post: IPostDTO) => Promise<IReadPostsResponse>
    getPosts: (page: number, limit: number, title?: string) => Promise<IReadPostsResponse>
    getPost: (id: number) => Promise<IReadPostResponse>
}