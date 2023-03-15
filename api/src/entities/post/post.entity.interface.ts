import { IPostDTO } from "../../interfaces/dto/post.interface.dto";
import { IStringError } from "../../interfaces/stringError.interface";

export interface IPostEntity {
    title: string
    subtitle: string
    imagePath: string
    description: string
    creationDate: Date

    create: () => IStringError | IPostDTO

    validateTitle(): boolean
    validateSubtitle(): boolean
    validateImagePath(): boolean
    validateDescription(): boolean
    validateCreationDate(): boolean
}