import { beforeEach, describe, expect, it, vi } from "vitest"
import { MockPostRepository } from "../../../adapters/repositories/post/post.repository.mock"
import { ReadPostUseCase } from "./readPost.usecase"

const readPostResponse = {
    status: true,
    content: {
        id: 1,
        title: "post title",
        subtitle: "post subtitle",
        creationDate: new Date().toLocaleString("pt-BR"),
        likes: 0
    },
    message: 'ok'
}

const postRepository = new MockPostRepository()
postRepository.getPost = vi.fn()
    .mockImplementationOnce(() => Promise.resolve(readPostResponse))
    .mockImplementationOnce(() => Promise.resolve({ ...readPostResponse, content: null }))
    .mockImplementationOnce(() => Promise.resolve({ status: false, error: 'ERROR' }))
    .mockImplementationOnce(() => { throw new Error('THROWED_ERROR_MESSAGE') })

describe("Testing use case - Read Post", async () => {
    let spyGetPost: any
    let readPostUseCase: any

    beforeEach(() => {
        readPostUseCase = new ReadPostUseCase(postRepository)
        spyGetPost = vi.spyOn(postRepository, 'getPost')
    })  

    it("should read a post successfully", async () => {
        const id = 4
        const result = await readPostUseCase.execute(id)

        expect(result).toStrictEqual(readPostResponse)
    })

    it("should read successfully when the post is not found", async () => {
        const id = 3
        const result = await readPostUseCase.execute(id)

        expect(result.content).toBeNull()
        expect(spyGetPost).toHaveBeenCalledWith(id)
    })

    it("should return an error when status returns false", async () => {
        const id = 3
        const result = await readPostUseCase.execute(id)

        expect(result).toStrictEqual({ status: false, error: 'ERROR' })
    })

    it("should throw an error, with an message", async () => {
        const id = 3
        const result = await readPostUseCase.execute(id)

        expect(result).toStrictEqual({ status: false, error: 'THROWED_ERROR_MESSAGE' })
    })

    it("should call the use case function with the id", async () => {
        const id = 4
        await readPostUseCase.execute(id)

        expect(spyGetPost).toHaveBeenCalledWith(id)
    })

    it("should return missing id error", async () => {
        const undef = undefined as any as undefined
        const result = await readPostUseCase.execute(undef)

        expect(spyGetPost).not.toHaveBeenCalled()
        expect(result).toStrictEqual({ status: false, error: 'MISSING_ID' })
    })
})
