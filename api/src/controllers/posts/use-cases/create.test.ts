// test tools
import { describe, expect, it, vi } from "vitest";

// controller use case
import { CreatePost } from "./create";

// mocks
import { postCreatorMock } from "../mocks/postCreator.mock";

describe("testing posts use-cases - create", () => {
    it("should be create a post successfully", async () => {
        const createPost = new CreatePost(
            "title test",
            "subtitle test",
            "image path test",
            postCreatorMock
        );
        
        const creationDate = (new Date).toLocaleString('pt-BR')

        const createdPost = await createPost.run(creationDate)

        expect(createdPost).toStrictEqual({
            id: 1,
            title: 'title test',
            subtitle: 'subtitle test',
            image: 'image path test',
            creationDate
        });
    });
});
