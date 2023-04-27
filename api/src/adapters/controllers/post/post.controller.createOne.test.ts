import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MockCreatePostUseCase } from "./../../../usecases/post/createPost/createPost.usecase.mock"
import { PostController } from "./post.controller"
import { mockRequest } from "./../../../tests/mocks/req.mock"
import { mockResponse } from "./../../../tests/mocks/res.mock"
import { MockReadPostsUseCase } from "./../../../usecases/post/readPosts/readPosts.usecase.mock";

let next: () => void

const mockCreatePostUseCase = new MockCreatePostUseCase()
const mockReadPostsUseCase = new MockReadPostsUseCase()

mockCreatePostUseCase.execute
    .mockImplementationOnce(async () => ({ status: true, message: 'Post created successfully' }))
    .mockImplementationOnce(async () => ({ status: false, error: 'REPOSITORY_FAILED' }))
    
const postController = new PostController(mockCreatePostUseCase, mockReadPostsUseCase)

next = vi.fn()

let spyExecute: any

const mockPost = {
    title: 'Post title',
    subtitle: 'Post subtitle',
    creationDate: new Date
}

let mockRes: any

describe('Testing controller - Post - createOne', () => {
    beforeEach(() => {
        mockRes = mockResponse()
        spyExecute = vi.spyOn(mockCreatePostUseCase, 'execute')
    })

    it('Testing create post', async () => {
        const mockReq = mockRequest({ body: mockPost })

        const result = await postController.createOne(mockReq, mockRes, next)

        expect(spyExecute).toHaveBeenCalled()
        expect(mockRes.responseTemplateKey).toBe("CREATED")
    })

    it('Should return an error to create a post due to missing information', async () => {
        const { title, ...rest } = mockPost

        const mockReq = mockRequest({ body: rest })

        await postController.createOne(mockReq, mockRes, next)

        expect(spyExecute).not.toHaveBeenCalled()
        expect(mockRes).haveOwnProperty('responseTemplateKey')
        expect(mockRes.responseTemplateKey).toBe("MISSING_INFORMATIONS")
    })

    it('Should return an error to create a post due to have error in the repository', async () => {
        const mockReq = mockRequest({ body: mockPost })

        await postController.createOne(mockReq, mockRes, next)

        expect(spyExecute).toHaveBeenCalled()
        expect(mockRes).haveOwnProperty('responseTemplateKey')
        expect(mockRes.responseTemplateKey).toBe("REPOSITORY_FAILED")
    })

    afterEach(() => expect(next).toHaveBeenCalled())
})