import { IPost } from "../../../interfaces/post.interface"
import { IReadPostsResponse } from "../../../interfaces/readPosts.interface"

export interface IPostRepository {
    createPost: () => Promise<IReadPostsResponse>
    getPost: () => Promise<IReadPostsResponse>
    getPosts: (offset: number, limit: number) => Promise<IReadPostsResponse>
}