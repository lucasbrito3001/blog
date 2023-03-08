import { ICreatePost, ICreatePostDTO } from "../types/createPost.interface";
import { IPost } from "../types/post.interface";

export class CreatePost implements ICreatePost {
    public title;
    public subtitle;
    public image;

    public postCreator;

    constructor(
        title: string,
        subtitle: string,
        image: string,
        postCreator: (post: ICreatePostDTO) => Promise<IPost>
    ) {
        this.title = title;
        this.subtitle = subtitle;
        this.image = image;
        this.postCreator = postCreator;
    }

    async run(creationDate: string) {
        const createdPost = await this.postCreator({
            title: this.title,
            subtitle: this.subtitle,
            image: this.image,
            creationDate
        })

        return createdPost;
    }
}