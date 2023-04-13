import { existsSync, readFileSync } from "fs";
import { IPostDTO } from "../../interfaces/dto/post.interface.dto";
import { IPostEntity } from "./post.entity.interface";
import { IStringError } from "../../interfaces/stringError.interface";

export class Post implements IPostEntity {
    public readonly title;
    public readonly subtitle;
    public readonly creationDate;
    public readonly likes;

    constructor({ title, subtitle, creationDate }: IPostDTO) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
        this.likes = 0;
    }

    public create() {
        const isValidTitle = this.validateTitle();
        const isValidSubtitle = this.validateSubtitle();
        const isValidCreationDate = this.validateCreationDate();
        
        if (!isValidTitle || !isValidSubtitle || !isValidCreationDate) {
            const error: IStringError = { 
                error: "Error to create post, invalid or missing infos" 
            }
            
            return error;
        }

        const post: IPostDTO = {
            title: this.title,
            subtitle: this.subtitle,
            creationDate: this.creationDate,
            likes: this.likes
        }
         
        return post;
    }

    public validateTitle() {
        return this.title.length > 0;
    }

    public validateSubtitle() {
        return this.subtitle.length > 0;
    }

    public validateCreationDate() {
        return new Date(this.creationDate).toDateString() !== 'Invalid Date';
    }
}
