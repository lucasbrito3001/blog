import { describe, expect, it } from "vitest";
import { Post } from "./post.entity";

const title = 'post title'
const subtitle = 'post subtitle'
const imagePath = 'imagePath.png'
const description = 'post description'
const creationDate = new Date

const postInfos = {
    title,
    subtitle,
    imagePath,
    description,
    creationDate
}

describe('Testing entity - Post', () => {
    it('should create a post successfully', () => {
        const postEntity = new Post(postInfos)

        const post = postEntity.create()
        expect(post).toStrictEqual(postInfos)
    })

    it('should have an error creating a post - invalid title', () => {
        const postEntity = new Post({ ...postInfos, title: '' })

        const post = postEntity.create()

        expect(post).toStrictEqual({ error: 'Error to create post, invalid or missing infos' })
    })

    it('should have an error creating a post - invalid subtitle', () => {
        const postEntity = new Post({ ...postInfos, subtitle: '' })

        const post = postEntity.create()

        expect(post).toStrictEqual({ error: 'Error to create post, invalid or missing infos' })
    })

    it('should have an error creating a post - invalid imagePath', () => {
        const postEntity = new Post({ ...postInfos, imagePath: 'imagePathError.png' })

        const post = postEntity.create()

        expect(post).toStrictEqual({ error: 'Error to create post, invalid or missing infos' })
    })

    it('should have an error creating a post - invalid description', () => {
        const postEntity = new Post({ ...postInfos, description: '' })

        const post = postEntity.create()

        expect(post).toStrictEqual({ error: 'Error to create post, invalid or missing infos' })
    })

    it('should have an error creating a post - invalid dateCreation', () => {
        const postEntity = new Post({ ...postInfos, creationDate: new Date('2023-13-01') })

        const post = postEntity.create()

        expect(post).toStrictEqual({ error: 'Error to create post, invalid or missing infos' })
    })
})