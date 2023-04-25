import { Router } from "express";
import { PostController } from "../adapters/controllers/post/post.controller";
import { PostRepository } from "../adapters/repositories/post/post.repository";
import { Post } from "../entities/post/post.entity";
import { PostRoutes } from "../routes/post.route";
import { CreatePostUseCase } from "../usecases/post/createPost/createPost.usecase";
import { AnyFunction } from "../constants/routes";
import { DataSource } from "typeorm";
import { Post as PostEntity } from "./database/entity/post.entity";
import { ReadPostsUseCase } from "../usecases/post/readPosts/readPosts.usecase";


export class PostRouter {
    private postController

    constructor(dataSource: DataSource, entity: typeof PostEntity) {
        const postEntity = new Post()
        const postRepository = new PostRepository(dataSource, entity)
        const createPostUseCase = new CreatePostUseCase(postEntity, postRepository)
        const readPostsUseCase = new ReadPostsUseCase(postRepository)

        this.postController = new PostController(createPostUseCase, readPostsUseCase)
    }
    
    getRoutes = () => {
        const router = Router()
        
        const routes = new PostRoutes(this.postController).routes
        
        routes.forEach(route => {
            const routeParams: [string, AnyFunction] = [route.endpoint, route.controller]
        
            router[route.method](...routeParams)
        })
    
        return router
    }
}