import { ICreatePostResponse } from "../../../interfaces/createPost.interface";

export interface ICreatePost {
    execute: () => Promise<ICreatePostResponse>
}