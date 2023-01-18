// List of posts
import POSTS from "../../../posts/index";

// Components
import CardPost from "../../shared/cardPost/index";

// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

// styles
import "./styles.scss"

export default function Posts({ category, titleSearched }) {
    const postsToRender = POSTS.filter(post => 
        post.title.toLowerCase().includes(titleSearched ? titleSearched.toLowerCase() : '') ||
        (category ? title.categories.includes(category) : '')
    )

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
