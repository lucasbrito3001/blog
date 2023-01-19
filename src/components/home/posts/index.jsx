// List of posts
import POSTS from "../../../posts/index";

// Components
import CardPost from "../../shared/cardPost/index";

// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

// styles
import "./styles.scss"
import { useEffect, useState } from "react";

// services
import { getPosts } from "../../../services/posts"

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
            <Col xs="12" md="6" lg="4" key={idx}>
                <CardPost
                    postTitle={post.title}
                    postImage={post.image}
                    postDescription={post.subtitle}
                />
            </Col>
        ));
    }

    return (
        <Container>
            <Row className="g-4">{renderCards()}</Row>
        </Container>
    );
}
