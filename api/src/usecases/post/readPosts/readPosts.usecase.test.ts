import { describe, expect, it, vi } from "vitest";
import { MockPostRepository } from "../../../adapters/repositories/post/post.repository.mock";
import { ReadPostsUseCase } from "./readPosts.usecase";

describe("Testing use case - Read Posts", () => {
    it("should read between 0 and 12 posts successfully", async () => {
        const postRepository = new MockPostRepository();

        const postUseCase = new ReadPostsUseCase(postRepository, 12, 0);

        const posts = await postUseCase.execute();

        const postsLength = posts.content.length;

        expect(posts.status).toBe(true);
        expect(postsLength).toBeGreaterThanOrEqual(0);
        expect(postsLength).toBeLessThan(12);
    });

    it("should return posts successfully with an empty array of posts", async () => {
        const postRepository = new MockPostRepository();

        vi.spyOn(postRepository, "getPosts").mockImplementation(() =>
            Promise.resolve({ status: true, content: [], message: 'ok' })
        );

        const postUseCase = new ReadPostsUseCase(postRepository, 12, 0);

        const post = await postUseCase.execute();

        expect(postRepository.getPosts).toHaveBeenCalled();
        expect(post).toStrictEqual({
            status: true,
            content: [],
            message: "ok",
        });
    });

    it("should return an error getting posts", async () => {
        const postRepository = new MockPostRepository();

        vi.spyOn(postRepository, "getPosts").mockImplementation(() =>
            Promise.resolve({ status: false, error: 'Erro no acesso da base de dados', content: [] })
        );

        const postUseCase = new ReadPostsUseCase(postRepository, 12, 0)

        const post = await postUseCase.execute()

        expect(post).toStrictEqual({ status: false, error: 'Erro no acesso da base de dados' })
    });
});
