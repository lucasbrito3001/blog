import { IStringError } from "./stringError.interface"

export interface ICreatePostResponse {
    status: boolean
    error?: string
    message?: string
}