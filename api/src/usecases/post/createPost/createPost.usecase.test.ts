import { describe, expect, it, vi } from "vitest";
import { CreatePostUseCase } from "./createPost.usecase";
import { MockPostRepository } from "../../../adapters/repositories/post/post.repository.mock";
import { Post } from "../../../entities/post/post.entity";

describe("Testing use case - Create Post", () => {
    it("should execute the creation of a post in database successfully", async () => {
        const postRepository = new MockPostRepository();

        const newPost = {
            title: "post title",
            subtitle: "post subtitle",
            imagePath: "imagePath.png",
            creationDate: new Date().toLocaleString("pt-BR"),
        };

        const postEntity = new Post(newPost);

        const createPostUseCase = new CreatePostUseCase(
            newPost,
            postEntity,
            postRepository
        );
        const post = await createPostUseCase.execute();

        expect(post).toStrictEqual({ status: true, message: "ok" });
    });

    it("should return a error creating the post entity", async () => {
        const postRepository = new MockPostRepository();

        const newPost = {
            title: "",
            subtitle: "post subtitle",
            imagePath: "imagePath.png",
            creationDate: new Date().toLocaleString("pt-BR"),
        };

        const postEntity = new Post(newPost);

        const createPostUseCase = new CreatePostUseCase(
            newPost,
            postEntity,
            postRepository
        );

        const post = await createPostUseCase.execute();

        expect(post).toStrictEqual({
            status: false,
            error: "Error to create post, invalid or missing infos",
        });
    });

    it("should return a error executing the creation of post in repository", async () => {
        const postRepository = new MockPostRepository();
        
        vi.spyOn(postRepository, "createPost").mockImplementation(() => Promise.resolve({ status: false }))

        const newPost = {
            title: "post title",
            subtitle: "post subtitle",
            imagePath: "imagePath.png",
            creationDate: new Date().toLocaleString("pt-BR"),
        };

        const postEntity = new Post(newPost);

        const createPostUseCase = new CreatePostUseCase(
            newPost,
            postEntity,
            postRepository
        );

        const post = await createPostUseCase.execute();

        expect(post).toStrictEqual({
            status: false,
            error: "Erro ao criar post, verificar com administrador",
        });
    });
});
