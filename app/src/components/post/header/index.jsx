import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import LeftArrow from "../../../assets/images/left-arrow.png"
import { Link } from "react-router-dom";

export default function PostHeader({ postTitle, postSubtitle, postCategories }) {
    return (
        <header className="post-header">
            <Container>
                <Row className="p-4 p-lg-5">
                    <Col md="12" lg="12">
                        <Link to="/blog"><span className="post-header-back-button"><img src={LeftArrow} alt="seta apontada para direita, representando um botão de voltar tela" /></span></Link>
                        <ul className="post-header-category-list my-3">
                            {
                                postCategories.map((category) => <li>{category.text}</li>)
                            }
                        </ul>
                        <h1 className="post-header-title mb-0">{postTitle}</h1>
                        <p className="post-header-subtitle mb-0">
                            {postSubtitle}
                        </p>
                    </Col>
                    {/* <Col md="12" lg="2">
                        <ul>
                            <li>like</li>
                            <li>share</li>
                        </ul>
                    </Col> */}
                </Row>
            </Container>
        </header>
    );
}
