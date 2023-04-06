import { Link } from "react-router-dom";
import "./styles.scss";

import { getRecentPosts } from "../../../services/posts/index"
import { useEffect, useState, Fragment } from "react";

const t = [
    { title: "Como consumir uma API com JavaScript" },
    { title: "Manipulação de Arrays JavaScript ES6" }
];

export default function RecentPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    async function getPosts() {
        const posts = await getRecentPosts()
        setPosts(posts.content)
    }

    return (
        <article className="p-4 shadow h-100" id="recent-posts-wrapper">
            <header>
                <h1 id="recent-posts-header-text">Postagens recentes</h1>
            </header>
            {/* <hr className="my-1" /> */}
            <ul className="d-flex flex-column mt-3">
                {posts.length > 0 && posts.map((post) => {
                    return (
                        <Link
                            className="recent-posts-link"
                            to={`/blog/${post.title.toLowerCase().replace(/\s/g, '-')}`}
                        >
                            <li>
                                <h2 className="li-date text-muted">
                                    {new Date(post.createdAt).toLocaleDateString('pt-BR', { timezone: 'UTC' })}
                                </h2>
                                <h1 className="li-title mb-0">
                                    {post.title}
                                </h1>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </article>
    );
}
