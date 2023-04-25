import { IReadPosts } from "./readPosts.usecase.interface"
import { vi } from "vitest"

export class MockReadPostsUseCase implements IReadPosts {
    async execute(page: number, limit: number) {
        return { status: true, content: [] }
    }
}