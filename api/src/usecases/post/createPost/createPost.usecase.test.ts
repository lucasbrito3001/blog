import { describe, expect, it, vi } from "vitest";
import { CreatePostUseCase } from "./createPost.usecase";
import { MockPostRepository } from "../../../adapters/repositories/post/post.repository.mock";
import { Post } from "../../../entities/post/post.entity";

const newPost = {
    title: 'post title',
    subtitle: 'post subtitle',
    creationDate: new Date,
};

describe("Testing use case - Create Post", () => {
    it("should execute the creation of a post in database successfully", async () => {
        const postRepository = new MockPostRepository();

        const postEntity = new Post();

        const createPostUseCase = new CreatePostUseCase(
            postEntity,
            postRepository
        );
        const post = await createPostUseCase.execute(newPost);

        expect(post).toStrictEqual({ status: true, message: "Post created successfully" });
    });

    it("should return a error creating the post entity - invalid info", async () => {
        const postRepository = new MockPostRepository();

        const postEntity = new Post();

        const createPostUseCase = new CreatePostUseCase(
            postEntity,
            postRepository
        );

        const post = await createPostUseCase.execute({ ...newPost, title: '' });

        expect(post).toStrictEqual({
            status: false,
            error: "INVALID_INFORMATIONS",
        });
    });

    it("should return a error executing the creation of post in repository", async () => {
        const postRepository = new MockPostRepository();
        
        vi.spyOn(postRepository, "createPost").mockImplementation(() => Promise.resolve({ status: false, error: "REPOSITORY_FAILED" }))

        const postEntity = new Post();

        const createPostUseCase = new CreatePostUseCase(
            postEntity,
            postRepository
        );

        const post = await createPostUseCase.execute(newPost);

        expect(post).toStrictEqual({
            status: false,
            error: 'REPOSITORY_FAILED',
        });
    });
});
