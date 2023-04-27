import { beforeEach, describe, expect, it, vi } from "vitest";
import { MockReadPostsUseCase } from "../../../usecases/post/readPosts/readPosts.usecase.mock"
import { PostController } from "./post.controller"
import { mockRequest } from "../../../tests/mocks/req.mock"
import { mockResponse } from "../../../tests/mocks/res.mock"
import { MockCreatePostUseCase } from "../../../usecases/post/createPost/createPost.usecase.mock";
import { MockReadPostUseCase } from "../../../usecases/post/readPost/readPost.usecase.mock";

const mockQueryParamsOffsetLimit = { page: '3', limit: '12', title: 'act' }

let mockRes: any
let next: () => void = vi.fn()

const readPostsResponse = {
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

const mockCreatePostUseCase = new MockCreatePostUseCase()
const mockReadPostsUseCase = new MockReadPostsUseCase()
const mockReadPostUseCase = new MockReadPostUseCase()

const spyExecute: any = vi.spyOn(mockReadPostsUseCase, 'execute')

spyExecute
    .mockImplementationOnce(async () => (readPostsResponse))
    .mockImplementationOnce(async () => ({ status: true, content: [] }))
    .mockImplementationOnce(async () => ({ status: false, error: 'INTERNAL_USECASE_ERROR' }))
    .mockImplementationOnce(async () => ({ status: true }))
    .mockImplementationOnce(async () => ({ status: true }))
    
const postController = new PostController(mockCreatePostUseCase, mockReadPostsUseCase, mockReadPostUseCase)

describe('Testing controller - Post - readAll', () => {
    beforeEach(() => {
        mockRes = mockResponse()
    })

    it('should read posts successfully with an item in the content property', async () => {
        const mockReq = mockRequest({ query: {} })

        const result = await postController.readAll(mockReq, mockRes, next)
        
        expect(spyExecute).toHaveBeenCalledWith(0, 12, '')
        expect(mockRes.responseTemplateKey).toBe('OK')
        expect(mockRes.responseContent).toStrictEqual(readPostsResponse.content)
    })

    it('should read posts successfully with an empty list of posts', async () => {
        const mockReq = mockRequest({ query: {} })

        await postController.readAll(mockReq, mockRes, next)
        
        expect(mockRes.responseTemplateKey).toBe('OK')
        expect(mockRes.responseContent).toStrictEqual([])
    })

    it('should return an error to read posts and set the error returned from the use case as responseTemplateKey', async () => {
        const mockReq = mockRequest({ query: {} })

        await postController.readAll(mockReq, mockRes, next)
        
        expect(mockRes.responseTemplateKey).toBe('INTERNAL_USECASE_ERROR')
        expect(mockRes.responseContent).toBe(undefined)
    })

    it('should call the use case passing the received query parameters', async () => {
        const mockReq = mockRequest({ query: mockQueryParamsOffsetLimit })

        const result = await postController.readAll(mockReq, mockRes, next)
        
        expect(spyExecute).toHaveBeenCalledWith(3, 12, 'act')
    })

    it('should call the use case passing default query parameters, when not receive an page and limit', async () => {
        const mockReq = mockRequest({ query: {} })

        const result = await postController.readAll(mockReq, mockRes, next)
        
        expect(spyExecute).toHaveBeenCalledWith(0, 12, '')
    })
})