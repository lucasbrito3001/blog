import POSTS from "../../posts";
import { formatTitle } from "../blog";
import { httpClient } from "../httpClient";

const categoriesByPost = {
    'como-automatizar-deploy-em-um-vps-com-github-actions': [{ value: 'devops', text: "DevOps" }],
    'pilhas-em-typescript': [{ value: "data-structure", text: "Estrutura de Dados"}, { value: "ts", text: "TypeScript"}],
    'manipulação-de-arrays-javascript-es6': [{ value: "js", text: "JavaScript" }]
}

export async function getPosts({ page, limit = 12, title, categories }, client = httpClient('blogposts')) {
    try {
        const { data } = await client.get('/post', { params: { page, limit, title, categories } })
        data.content = data.content.map(post => ({ ...post, categories: categoriesByPost[formatTitle(post.title)] }))
        return data
    } catch (error) {
        return { status: false, error }
    }
}

export async function getRecentPosts() {
    try {
        return { status: true, content: POSTS.slice(0, 3) }
    } catch (error) {
        return { status: false, error }
    }
}