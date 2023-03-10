export class MockPostRepository {
    async createPost() {
        return true;
    }

    async getPost() {
        return {
            id: 1,
            title: "post title",
            subtitle: "post subtitle",
            imagePath: "imagePath.png",
            creationDate: new Date().toLocaleString("pt-BR"),
        };
    }

    async getPosts() {
        return [
            {
                id: 1,
                title: "post title",
                subtitle: "post subtitle",
                imagePath: "imagePath.png",
                creationDate: new Date().toLocaleString("pt-BR"),
            },
        ];
    }
}
