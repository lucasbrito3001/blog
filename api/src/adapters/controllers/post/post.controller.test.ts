import { beforeEach, describe, expect, it, vi } from "vitest";
import { MockCreatePostUseCase } from "../../../usecases/post/createPost/createPost.usecase.mock"
import { PostController } from "./post.controller"
import { NextFunction } from "express";
import { RequestExtended, ResponseExtended } from "../../../interfaces/expressReqResExtended";

const mockPost = { 
    title: 'Post title',
    subtitle: 'Post subtitle',
    creationDate: new Date
}

const mockCreatePostUseCase = new MockCreatePostUseCase()

mockCreatePostUseCase.execute
    .mockImplementationOnce(async () => ({ status: true, message: 'ok' }))
    .mockImplementationOnce(async () => ({ status: false, message: 'Error to create new post, missing informations' }))

let spyExecute: any

beforeEach(() => {
    spyExecute = vi.spyOn(mockCreatePostUseCase, 'execute')
})
    
const postController = new PostController(mockCreatePostUseCase)

const mockRequest = {
    body: mockPost
} as any as RequestExtended

const mockResponse = {
    status(code: number) {
        return { 
            json(content: any) {
                return { status: code, data: content }
            }
        }
    },
} as any as ResponseExtended

let next: () => void

next = vi.fn().mockImplementation(() => {})

const mockResultSuccess = { status: true, message: 'Post created succesfully' }

describe('Testing controller - Post', () => {
    it('Testing create post', async () => {
        const result = await postController.createPost(mockRequest, mockResponse, next)

        expect(spyExecute).toHaveBeenCalled()
        expect(result).toStrictEqual({ status: 201, data: mockResultSuccess })
    })

    it('Should return an error to create a post due to missing information', async () => {
        const { title, ...rest } = mockPost

        mockRequest.body = rest

        await postController.createPost(mockRequest, mockResponse, next)

        expect(spyExecute).not.toHaveBeenCalled()
        expect(next).toHaveBeenCalled()
        expect(mockResponse).haveOwnProperty('errorKey')
        expect(mockResponse.errorKey).toBe("MISSING_INFORMATIONS")
    })
})