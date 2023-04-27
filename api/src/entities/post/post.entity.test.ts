import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import { Post } from "./post.entity";

const title = 'post title'
const subtitle = 'post subtitle'
const creationDate = '2023-01-01'

const postInfos = {
    title,
    subtitle,
    creationDate,
    likes: 0
}

let post = {}

describe('Testing entity - Post', () => {
    let postEntity

    beforeEach(() => {
        postEntity = new Post()
    })

    it('should create a post successfully', () => {
        const post = postEntity.create(postInfos)
        expect(post).toStrictEqual(postInfos)
    })

    it('should have an error creating a post - invalid title', () => {
        const post = postEntity.create({ ...postInfos, title: '' })

        expect(post).toStrictEqual({ error: 'INVALID_INFORMATIONS' })
    })

    it('should have an error creating a post - invalid subtitle', () => {
        const post = postEntity.create({ ...postInfos, subtitle: '' })

        expect(post).toStrictEqual({ error: 'INVALID_INFORMATIONS' })
    })

    it('should have an error creating a post - invalid dateCreation', () => {
        const post = postEntity.create({ ...postInfos, creationDate: 'tenis' })

        expect(post).toStrictEqual({ error: 'INVALID_INFORMATIONS' })
    })
})