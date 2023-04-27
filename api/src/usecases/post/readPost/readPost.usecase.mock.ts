import { IReadPost } from "./readPost.usecase.interface"

export class MockReadPostUseCase implements IReadPost {
    async execute(id: number) {
        return { status: true, content: null }
    }
}