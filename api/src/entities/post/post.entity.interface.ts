import { IPostDTO } from "../../interfaces/dto/post.interface.dto";
import { IStringError } from "../../interfaces/stringError.interface";
import { UUIDV4 } from "sequelize";

export interface IPostEntity {
    id?: typeof UUIDV4
    title: string
    subtitle: string
    creationDate: string | undefined
    likes: number | undefined

    create: (post: IPostDTO) => IStringError | IPostDTO

    validateTitle(): boolean
    validateSubtitle(): boolean
    validateCreationDate(): boolean
}