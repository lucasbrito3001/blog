import { Router } from "express";
import { PostController } from "../adapters/controllers/post/post.controller";
import { PostRepository } from "../adapters/repositories/post/post.repository";
import { Post } from "../entities/post/post.entity";
import { PostRoutes } from "../routes/post.route";
import { CreatePostUseCase } from "../usecases/post/createPost/createPost.usecase";
import { AnyFunction } from "../constants/routes";

const postEntity = new Post()
const postRepository = new PostRepository()
const createPostUseCase = new CreatePostUseCase(postEntity, postRepository)
const postController = new PostController(createPostUseCase)

function getRoutes() {
    const router = Router()
    
    const routes = new PostRoutes(postController).getRoutes()
    
    routes.forEach(route => {
        const routeParams: [string, AnyFunction] = [route.endpoint, route.controller]
    
        router[route.method](...routeParams)
    })

    return router
}

export { getRoutes }