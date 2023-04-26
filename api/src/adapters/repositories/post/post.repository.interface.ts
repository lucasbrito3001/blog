import { IPostDTO } from "../../../interfaces/dto/post.interface.dto"
import { IPost } from "../../../interfaces/post.interface"
import { IReadPostsResponse } from "../../../interfaces/readPosts.interface"

export interface IPostRepository {
    createPost: (post: IPostDTO) => Promise<IReadPostsResponse>
    // getPost: () => Promise<IReadPostsResponse>
    getPosts: (page: number, limit: number, title?: string) => Promise<IReadPostsResponse>
}