import { IPost } from "./post.interface"

export interface IReadPostsResponse {
    status: boolean
    error?: string
    message?: string
    content?: IPost | IPost[]
}