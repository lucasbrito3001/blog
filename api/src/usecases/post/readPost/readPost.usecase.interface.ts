import { IReadPostResponse } from "../../../interfaces/readPost.interface";

export interface IReadPost {
    execute: (id: number) => Promise<IReadPostResponse>
}