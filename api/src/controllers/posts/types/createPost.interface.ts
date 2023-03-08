import { IPost } from "./post.interface"

export interface ICreatePostBase {
    title: string
    subtitle: string
    image: string
}

export interface ICreatePostDTO extends ICreatePostBase {
    creationDate: string
}

export interface ICreatePost extends ICreatePostBase { 
    postCreator: (post: ICreatePostDTO) => Promise<IPost>
    run: (creationDate: string) => Promise<IPost>
}