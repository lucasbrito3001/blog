import { Col, Container, Row } from "react-bootstrap"

import CardBlogPost from "../../shared/newCardPost"
import postsToRender from "../../../posts/index"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecentPosts } from "../../../services/posts";

import "./styles.scss"

export default function BlogPreview() {
    const [recentPosts, setRecentPosts] = useState([])

    useEffect(() => {
        async function getRecentPostsOnLoad() {
            const recentPosts = await getRecentPosts()

            setRecentPosts(recentPosts.content)
        }

        getRecentPostsOnLoad()
    }, [])

    function renderCards() {
        return recentPosts.map((post, idx) => (
            <Col xs={12} md={6} lg={4} key={idx}>
                <Link to={`/blog/${post.title.toLowerCase().replace(/\s/g, '-')}`}>
                    <CardBlogPost
                        postTitle={post.title}
                        postDate={post.createdAt}
                        postDescription={post.subtitle}
                        postCategories={post.categories}
                    />
                </Link>
            </Col>
        ));
    }

    return (
        <Container>
            <Row className="pt-0 pt-lg-5 mb-4">
                <Col>
                    <header>
                        <h1 className="sections-title blog-title">postagens recentes blog</h1>
                        <h2 className="blog-subtitle text-muted">no meu blog você vai encontrar conteúdos sobre carreira, tutoriais de tecnologia, e arquitetura de software</h2>
                    </header>
                </Col>
            </Row>
            <Row className="pb-5 gy-4">
                { recentPosts.length > 0 && renderCards() }
                <Col><button className="project-button blog-button shadow-lg">Visitar blog <span className="blog-button-chevron">&rarr;</span></button></Col>
            </Row>
        </Container>
    )
}