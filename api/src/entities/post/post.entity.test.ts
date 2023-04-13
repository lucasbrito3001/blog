import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import { Post } from "./post.entity";

const title = 'post title'
const subtitle = 'post subtitle'
const creationDate = new Date
const likes = 0

const postInfos = {
    title,
    subtitle,
    creationDate,
    likes
}

let post = {}

describe('Testing entity - Post', () => {
    beforeEach(() => {
        const postEntity = new Post(postInfos)
        post = postEntity.create()
    })
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

    it('should have an error creating a post - invalid dateCreation', () => {
        const postEntity = new Post({ ...postInfos, creationDate: new Date('2023-13-01') })

        const post = postEntity.create()

        expect(post).toStrictEqual({ error: 'Error to create post, invalid or missing infos' })
    })
})