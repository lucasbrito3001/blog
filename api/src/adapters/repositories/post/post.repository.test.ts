import { describe, it, vi, expect, beforeEach } from "vitest";
import { PostRepository } from "./post.repository";

const likeOperator = (text: string) => `${text}`

const repositoryFunctions = {
    find: vi.fn()
        .mockImplementationOnce(() => [{ title: 't1' }])
        .mockImplementationOnce(() => [])
        .mockImplementationOnce(() => { throw new Error('THROWED_ERROR_MESSAGE') })
        .mockImplementationOnce(() => { throw { code: 'THROWED_ERROR_CODE' } }),
    findOneBy: vi.fn()
        .mockImplementationOnce(() => [{ title: 't1' }])
        .mockImplementationOnce(() => { throw new Error('THROWED_ERROR_MESSAGE') })
        .mockImplementationOnce(() => { throw { code: 'THROWED_ERROR_CODE' } })
        .mockImplementationOnce(() => { throw {} }),
    save: vi.fn()
        .mockImplementationOnce(() => true)
        .mockImplementationOnce(() => { throw { code: 'ER_DUP_ENTRY' } })
        .mockImplementationOnce(() => { throw new Error('') })
}

const mockDataSource = {
    getRepository: (entity: string) => (repositoryFunctions)
}

const postRepository = new PostRepository(mockDataSource, 'post', likeOperator)

describe('Testing repository - Create post', () => {
    const newPost = {
        "title": "Post title 123",
        "subtitle": "Post subtitle",
        "creationDate": "2023-10-15",
        "likes": 0
    }

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
    let spyFind: any

    beforeEach(() => {
        spyFind = vi.spyOn(repositoryFunctions, 'find')
    })

    it('should read posts successfully', async () => {
        const result = await postRepository.getPosts(0, 12, 'title searched')
        expect(result).toStrictEqual({ status: true, content: [{ title: 't1' }]})
    })

    it('should call the repository function with where parameters', async () => {
        await postRepository.getPosts(0, 12, 'title searched')
        expect(spyFind).toHaveBeenCalledWith({
            skip: 0,
            take: 12,
            order: { creationDate: 'DESC' },
            where: { title: `%title searched%` }
        })
    })

    it('should return the throwed error message', async () => {
        const result = await postRepository.getPosts(0, 12)
        expect(result).toStrictEqual({ status: false, error: 'THROWED_ERROR_MESSAGE' })
    })

    it('should return the error.code throwed from the data source', async () => {
        const result = await postRepository.getPosts(0, 12)
        expect(result).toStrictEqual({ status: false, error: 'THROWED_ERROR_CODE' })
    })

    it('should return the throwed error message by undefined offset or limit', async () => {
        const undef = undefined as any as number
        const result = await postRepository.getPosts(0, undef)
        expect(result).toStrictEqual({ status: false, error: 'MISSING_PAGINATION_INFORMATIONS' })
    })
})

describe('Testing repository - Read post', () => {
    let spyFindOneBy: any

    beforeEach(() => {
        spyFindOneBy = vi.spyOn(repositoryFunctions, 'findOneBy')
    })

    it('should read a post by id successfully', async () => {
        const id = 12

        const result = await postRepository.getPost(id)

        expect(spyFindOneBy).toHaveBeenCalledWith({ id })
        expect(result).toStrictEqual({ status: true, content: [{ title: 't1' }], message: 'ok' })
    })

    it('should return an error to read a post by missing ID', async () => {
        const undef = undefined as any as number

        const result = await postRepository.getPost(undef)

        expect(spyFindOneBy).not.toHaveBeenCalled()
        expect(result).toStrictEqual({ status: false, error: 'MISSING_ID' })
    })

    it('should return the throwed error message', async () => {
        const id = 12

        const result = await postRepository.getPost(id)

        expect(spyFindOneBy).toHaveBeenCalledWith({ id })
        expect(result).toStrictEqual({ status: false, error: 'THROWED_ERROR_MESSAGE' })
    })

    it('should return the throwed error code', async () => {
        const id = 12

        const result = await postRepository.getPost(id)

        expect(spyFindOneBy).toHaveBeenCalledWith({ id })
        expect(result).toStrictEqual({ status: false, error: 'THROWED_ERROR_CODE' })
    })

    it('should return the throwed default error message', async () => {
        const id = 12

        const result = await postRepository.getPost(id)

        expect(spyFindOneBy).toHaveBeenCalledWith({ id })
        expect(result).toStrictEqual({ status: false, error: 'REPOSITORY_FAILED' })
    })
})