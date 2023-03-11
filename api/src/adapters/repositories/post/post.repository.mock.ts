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
                    imagePath: "imagePath.png",
                    creationDate: new Date().toLocaleString("pt-BR"),
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
                    imagePath: "imagePath.png",
                    creationDate: new Date().toLocaleString("pt-BR"),
                },
            ]
        }
    }
}
