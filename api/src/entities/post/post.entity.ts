import { existsSync, readFileSync } from "fs";
import { IPostDTO } from "../../interfaces/dto/post.interface.dto";
import { IPostEntity } from "./post.entity.interface";
import { IStringError } from "../../interfaces/stringError.interface";

export class Post implements IPostEntity {
    public title: string = '';
    public subtitle: string = '';
    public creationDate: string  = '';
    public likes: number = 0;

    public create({ title, subtitle, creationDate }: IPostDTO) {
        if([title, subtitle, creationDate].some(param => param === undefined)) return { error: 'MISSING_INFORMATIONS' }

        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;

        const isValidTitle = this.validateTitle();
        const isValidSubtitle = this.validateSubtitle();
        const isValidCreationDate = this.validateCreationDate();
        
        if (!isValidTitle || !isValidSubtitle || !isValidCreationDate) return { error: "INVALID_INFORMATIONS" }

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
        if(new Date(this.creationDate) instanceof Date) {
            return new Date(this.creationDate).toDateString() !== 'Invalid Date';
        }

        return false
    }
}
