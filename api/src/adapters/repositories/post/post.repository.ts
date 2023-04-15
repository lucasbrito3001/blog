import { IPostRepository } from "./post.repository.interface";

export class PostRepository implements IPostRepository {
    createPost = async () => {
        console.log("ENTER")
        return { status: false, error: "REPOSITORY_FAILED" }
    }
}