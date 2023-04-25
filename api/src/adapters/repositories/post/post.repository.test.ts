import { describe, it, vi, Mock, expect } from "vitest";
import { PostRepository } from "./post.repository";
import { DataSource } from "typeorm";

const mockDataSource = {
    getRepository: (entity: string) => ({
        find: vi.fn()
            .mockImplementationOnce(() => [{ title: 't1' }])
            .mockImplementationOnce(() => { throw new Error('') })
            .mockImplementationOnce(() => { throw { code: 'ER_FOUND' } }),
            // .mockImplementationOnce(() => true)
            // .mockImplementationOnce(() => true),
        save: vi.fn()
            .mockImplementationOnce(() => true)
            .mockImplementationOnce(() => { throw { code: 'ER_DUP_ENTRY' } })
            .mockImplementationOnce(() => { throw new Error('') })
    })
}

const newPost = {
	"title": "Post title 123",
	"subtitle": "Post subtitle",
	"creationDate": "2023-10-15",
    "likes": 0
}

const postRepository = new PostRepository(mockDataSource, 'post')

const spyFind = vi.spyOn(mockDataSource.getRepository(''), 'find')

describe('Testing repository - Create post', () => {
    it('should create a post successfully', async () => {
        const result = await postRepository.createPost(newPost)

        expect(result.status).toBeTruthy()
    })

    it('should have and error to create post when return an error code from data source repository - dup entry', async () => {
        const result = await postRepository.createPost(newPost)

        expect(result).toStrictEqual({ status: false, error: 'ER_DUP_ENTRY' })
    })

    it('should have and error to create post by internal repository error', async () => {
        const result = await postRepository.createPost(newPost)

        expect(result).toStrictEqual({ status: false, error: 'REPOSITORY_FAILED' })
    })
})

describe('Testing repository - Read posts', () => {
    it('should read posts successfully', async () => {
        const result = await postRepository.getPosts(0, 12)

        expect(result).toStrictEqual({ status: true, content: [{ title: 't1' }]})
    })

    it('should return REPOSITORY_FAILED as error, when throw an error without code property', async () => {
        const result = await postRepository.getPosts(0, 12)

        expect(result).toStrictEqual({ status: false, error: 'REPOSITORY_FAILED' })
    })

    it('should return the error.code throwed from the data source', async () => {
        const result = await postRepository.getPosts(0, 12)

        expect(result).toStrictEqual({ status: false, error: 'ER_FOUND' })
    })
})