import { describe, expect, it } from "vitest";
import { Post } from "./post.entity";

describe('Testing entity - Post', () => {
    it('should create a post successfully', () => {
        const creationDate = (new Date).toLocaleString('pt-BR')

        const postInfos = {
            title: 'post title',
            subtitle: 'post subtitle',
            imagePath: 'imagePath.png',
            creationDate
        }
        
        const postEntity = new Post(postInfos)

        const post = postEntity.create()

        expect(post).toStrictEqual(postInfos)
    })

    it('should have an error creating a post - invalid title', () => {
        const postInfos = {
            title: '',
            subtitle: 'post subtitle',
            imagePath: 'imagePath.png',
            creationDate: (new Date).toLocaleString('pt-BR') 
        }
        
        const postEntity = new Post(postInfos)

        const post = postEntity.create()

        expect(post).toStrictEqual({ error: 'Error to create post, invalid or missing infos' })
    })

    it('should have an error creating a post - invalid subtitle', () => {
        const postInfos = {
            title: 'post title',
            subtitle: '',
            imagePath: 'imagePath.png',
            creationDate: (new Date).toLocaleString('pt-BR') 
        }
        
        const postEntity = new Post(postInfos)

        const post = postEntity.create()

        expect(post).toStrictEqual({ error: 'Error to create post, invalid or missing infos' })
    })

    it('should have an error creating a post - invalid imagePath', () => {
        const postInfos = {
            title: 'post title',
            subtitle: 'post subtitle',
            imagePath: 'imagePathError.png',
            creationDate: (new Date).toLocaleString('pt-BR') 
        }
        
        const postEntity = new Post(postInfos)

        const post = postEntity.create()

        expect(post).toStrictEqual({ error: 'Error to create post, invalid or missing infos' })
    })

    it('should have an error creating a post - invalid dateCreation', () => {
        const postInfos = {
            title: 'post title',
            subtitle: 'post subtitle',
            imagePath: 'imagePath.png',
            creationDate: 'error tst'
        }
        
        const postEntity = new Post(postInfos)

        const post = postEntity.create()

        expect(post).toStrictEqual({ error: 'Error to create post, invalid or missing infos' })
    })
})