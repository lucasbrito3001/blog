import { describe, expect, it, vi } from "vitest";
import { MockPostRepository } from "../../../adapters/repositories/post/post.repository.mock";
import { ReadPostsUseCase } from "./readPosts.usecase";

const readPostResponse = {
    status: true,
    content: [
        {
            id: 1,
            title: "post title",
            subtitle: "post subtitle",
            creationDate: new Date().toLocaleString("pt-BR"),
            likes: 0
        },
    ],
    message: 'ok'
}

describe("Testing use case - Read Posts", async () => {
    const postRepository = new MockPostRepository();
    const spyGetPosts = vi.spyOn(postRepository, 'getPosts')

    spyGetPosts
        .mockImplementationOnce(() => Promise.resolve(readPostResponse))
        .mockImplementationOnce(() => Promise.resolve({ ...readPostResponse, content: [] }))
        .mockImplementationOnce(() => {
            throw new Error('REPOSITORY_FAILED')
        })
        .mockImplementationOnce(() => {
            throw new Error('')
        });

    it("should read between posts successfully, calling the function with 24 page and 12 limit", async () => {
        const postUseCase = new ReadPostsUseCase(postRepository);

        const posts = await postUseCase.execute(2, 12, '');

        expect(posts).toStrictEqual(readPostResponse);
        expect(spyGetPosts).toHaveBeenCalledWith(24, 12, '')
    });

    it("should return posts successfully with an empty array of posts, calling the function with page and limit as 12", async () => {
        const postUseCase = new ReadPostsUseCase(postRepository);

        const post = await postUseCase.execute(1, 12, '');

        expect(postRepository.getPosts).toHaveBeenCalledWith(12, 12, '');
        expect(post).toStrictEqual({ ...readPostResponse, content: [] });
    });

    it("should return an error in repository getting posts", async () => {
        const postUseCase = new ReadPostsUseCase(postRepository)

        const post = await postUseCase.execute(0, 12, '')

        expect(postRepository.getPosts).toHaveBeenCalledWith(0, 12, '');
        expect(post).toStrictEqual({ status: false, error: 'REPOSITORY_FAILED' })
    });

    it("should return an error getting posts when not getting an error message from repository", async () => {
        const postUseCase = new ReadPostsUseCase(postRepository)

        const post = await postUseCase.execute(0, 12, '')

        expect(postRepository.getPosts).toHaveBeenCalledWith(0, 12, '');
        expect(post).toStrictEqual({ status: false, error: 'INTERNAL_USECASE_ERROR' })
    });
});
