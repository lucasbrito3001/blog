import { ICreatePost } from "./createPost.usecase.interface"
import { vi } from "vitest"

export class MockCreatePostUseCase implements ICreatePost {
    execute = vi.fn()
}