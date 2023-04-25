export class MockPostRepository {
    async createPost() {
        return {
            status: true
        };
    }

    async getPost() {
        return {
            status: true,
            content: [
                {
                    id: 1,
                    title: "post title",
                    subtitle: "post subtitle",
                    creationDate: new Date().toLocaleString("pt-BR"),
                    likes: 0
                }
            ]
        };
    }

    async getPosts() {
        return {
            status: true,
            content: [
                {
                    id: 1,
                    title: "post title",
                    subtitle: "post subtitle",
                    creationDate: new Date().toLocaleString("pt-BR"),
                    likes: 0
                },
            ]
        }
    }
}
