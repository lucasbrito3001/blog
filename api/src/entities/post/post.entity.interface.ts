import { IPostDTO } from "../../interfaces/dto/post.interface.dto";
import { IStringError } from "../../interfaces/stringError.interface";

export interface IPostEntity {
    title: string;
    subtitle: string;
    imagePath: string;
    creationDate: string;

    create: () => IStringError | IPostDTO ;

    validateTitle: () => boolean;
    validateSubtitle: () => boolean;
    validateImagePath: () => boolean;
    validateCreationDate: () => boolean;
}