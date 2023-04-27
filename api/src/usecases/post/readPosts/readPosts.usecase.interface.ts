import { IReadPostsResponse } from "../../../interfaces/readPosts.interface";

export interface IReadPosts {
    execute: (page: number, limit: number, title: string) => Promise<IReadPostsResponse>
}