import { IPost } from "../../../interfaces/post.interface"

export interface IPostRepository {
    createPost: () => Promise<boolean>
    getPost: () => Promise<IPost>
    getPosts: () => Promise<IPost[]>
}