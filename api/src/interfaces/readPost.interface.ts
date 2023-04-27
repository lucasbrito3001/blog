import { IPost } from "./post.interface"

export interface IReadPostResponse {
    status: boolean
    error?: string
    message?: string
    content?: IPost | null
}