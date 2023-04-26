import { IPostRepository } from "../../../adapters/repositories/post/post.repository.interface";
import { IPost } from "../../../interfaces/post.interface";
import { IReadPostsResponse } from "../../../interfaces/readPosts.interface";

export interface IReadPosts {
    execute: (page: number, limit: number, title: string) => Promise<IReadPostsResponse>
}