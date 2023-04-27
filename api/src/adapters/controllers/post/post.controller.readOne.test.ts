import { beforeEach, describe, expect, it, vi } from "vitest";
import { mockResponse } from "../../../tests/mocks/res.mock";
import { mockRequest } from "../../../tests/mocks/req.mock";
import { PostController } from "./post.controller";
import { MockCreatePostUseCase } from "../../../usecases/post/createPost/createPost.usecase.mock";
import { MockReadPostUseCase } from "../../../usecases/post/readPost/readPost.usecase.mock";
import { MockReadPostsUseCase } from "../../../usecases/post/readPosts/readPosts.usecase.mock";

let mockRes: any
const next: () => void = vi.fn()

const mockCreatePostUseCase = new MockCreatePostUseCase()
const mockReadPostsUseCase = new MockReadPostsUseCase()
const mockReadPostUseCase = new MockReadPostUseCase()

mockReadPostUseCase.execute = vi.fn()
    .mockImplementationOnce(() => ({ status: true, content: { title: 'post' } }))
    .mockImplementationOnce(() => ({ status: true, content: null }))
    .mockImplementationOnce(() => ({}))

const postController = new PostController(mockCreatePostUseCase, mockReadPostsUseCase, mockReadPostUseCase)

let spyExecute: any

describe('Testing controller - Post - readOne', () => {
    beforeEach(() => {
        spyExecute = vi.spyOn(mockReadPostUseCase, 'execute')
        mockRes = mockResponse()
    })

    it('should read a post by id successfully', async () => {
        const mockReq = mockRequest({ params: { id: 1 } })

        await postController.readOne(mockReq, mockRes, next)

        expect(mockRes.responseTemplateKey).toBe("OK")
        expect(mockRes.responseContent).toStrictEqual({ title: 'post' })
    })

    it('should return an status 200 but with status false when not found any post', async () => {
        const mockReq = mockRequest({ params: { id: 1 } })

        await postController.readOne(mockReq, mockRes, next)

        expect(mockRes.responseTemplateKey).toBe("NOT_FOUND_BY_KEY")
        expect(mockRes.responseContent).toBeNull()
    })
    
    it('should return an error by missing id', async () => {
        const mockReq = mockRequest({ params: {} })

        await postController.readOne(mockReq, mockRes, next)

        expect(mockRes.responseTemplateKey).toBe("MISSING_ID")
    })

    it('should call the use case with the id received by route params', async () => {
        const mockReq = mockRequest({ params: { id: 12} })
        
        await postController.readOne(mockReq, mockRes, next)
        
        expect(spyExecute).toHaveBeenCalledWith(mockReq.params.id)
    })
})