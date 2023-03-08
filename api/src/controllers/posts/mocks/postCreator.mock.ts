import { ICreatePostDTO } from "../types/createPost.interface";

export async function postCreatorMock({ title, subtitle, image, creationDate }: ICreatePostDTO) {
    return { id: 1, title, subtitle, image, creationDate }
}