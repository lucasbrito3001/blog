// Components
import CardPost from "../../shared/newCardPost/index";

// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

// styles
import "./styles.scss"
import { useEffect, useState } from "react";

// services
import { getPosts } from "../../../services/posts"
import { Link } from "react-router-dom";

export default function Posts({ categories, titleSearched }) {
    let [postsToRender, setPostsToRender] = useState([])

    useEffect(() => {
        async function getPostsOnChange() {
            const POSTS = await getPosts(categories, titleSearched)
            setPostsToRender(POSTS)
        }

        getPostsOnChange()
    }, [categories, titleSearched])
    

    function renderCards() {
        return postsToRender.map((post, idx) => (
            <Col xs={12} md={6} lg={4} key={idx}>
                <Link to={`/blog/${post.title.toLowerCase().replace(/\s/g, '-')}`}>
                    <CardPost
                        postTitle={post.title}
                        // postImage={post.thumbnail}
                        postDescription={post.subtitle}
                        postCategories={post.categories}
                        postDate={post.createdAt}
                    />
                </Link>
            </Col>
        ));
    }

    return (
        <Container fluid>
            <Row className="g-5">{
                postsToRender.length > 0
                    ? renderCards()
                    : <Col>
                        <p className="text-center text-muted d-flex align-items-center justify-content-center my-5">Nenhum artigo encontrado...</p>
                    </Col>
            }</Row>
        </Container>
    );
}
