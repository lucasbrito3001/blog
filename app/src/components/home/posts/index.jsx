// Components
import CardPost from "../../shared/newCardPost/index";

// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

// styles
import "./styles.scss"

// services
import { Link } from "react-router-dom";
import { formatTitle } from "../../../services/blog";

export default function Posts({ posts= [] }) {
    function renderCards() {
        return posts.map((post, idx) => (
            <Col xs={12} md={6} lg={4} key={idx}>
                <Link to={`/blog/${formatTitle(post.title)}`}>
                    <CardPost
                        postTitle={post.title}
                        // postImage={post.thumbnail}
                        postDescription={post.subtitle}
                        postCategories={post.categories}
                        postDate={post.creationDate}
                    />
                </Link>
            </Col>
        ));
    }

    return (
        <Container fluid>
            <Row className="g-5">{
                posts.length > 0
                    ? renderCards()
                    : <Col>
                        <p className="text-center text-muted d-flex align-items-center justify-content-center my-5">Nenhum artigo encontrado...</p>
                    </Col>
            }</Row>
        </Container>
    );
}
