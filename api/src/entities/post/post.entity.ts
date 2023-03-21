import { existsSync, readFileSync } from "fs";
import { IPostDTO } from "../../interfaces/dto/post.interface.dto";
import { IPostEntity } from "./post.entity.interface";
import { IStringError } from "../../interfaces/stringError.interface";

export class Post implements IPostEntity {
    public readonly title;
    public readonly subtitle;
    public readonly imagePath;
    public readonly description;
    public readonly creationDate;

    constructor({ title, subtitle, imagePath, description, creationDate }: IPostDTO) {
        this.title = title;
        this.subtitle = subtitle;
        this.imagePath = imagePath;
        this.description = description;
        this.creationDate = creationDate;
    }

    public create() {
        const isValidTitle = this.validateTitle();
        const isValidSubtitle = this.validateSubtitle();
        const isValidImagePath = this.validateImagePath();
        const isValidDescription = this.validateDescription();
        const isValidCreationDate = this.validateCreationDate();
        
        if (!isValidTitle || !isValidSubtitle || !isValidImagePath || !isValidDescription || !isValidCreationDate) {
            const error: IStringError = { 
                error: "Error to create post, invalid or missing infos" 
            }
            
            return error;
        }

        const post: IPostDTO = {
            title: this.title,
            subtitle: this.subtitle,
            imagePath: this.imagePath,
            description: this.description,
            creationDate: this.creationDate,
        }
         
        return post;
    }

    public validateTitle() {
        return this.title.length > 0;
    }

    public validateSubtitle() {
        return this.subtitle.length > 0;
    }

    public validateImagePath() {
        return existsSync(`upload/${this.imagePath}`);
    }

    public validateDescription() {
        return this.description.length > 0;
    }

    public validateCreationDate() {
        return new Date(this.creationDate).toDateString() !== 'Invalid Date';
    }
}
