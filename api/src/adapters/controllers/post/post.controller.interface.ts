import { IPost } from "../../../interfaces/post.interface"
import { ICreatePost } from "../../../usecases/post/createPost/createPost.usecase.interface"
import { IReadPosts } from "../../../usecases/post/readPosts/readPosts.usecase.interface"

export interface IPostController {
    useCases: {
        createPost: ICreatePost
        readPosts: IReadPosts
    }

    readOne: () => Promise<IPost>
    readAll: () => Promise<IPost[]>
    createOne: () => Promise<boolean>
    updateOne: () => Promise<boolean>
    deleteOne: () => Promise<boolean>
}