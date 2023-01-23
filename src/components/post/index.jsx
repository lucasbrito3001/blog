import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import HANDLE_ARRAY from "../../posts/handleArray/index";
import API_INTEGRATION from "../../posts/apiIntegration/index";

const POST_BY_TITLE = {
    "manipulação-de-arrays-javascript-es6": HANDLE_ARRAY,
    "como-integrar-uma-api-com-javascript": API_INTEGRATION,
};

// styles
import "./styles.scss";
import { Col, Container, Row } from "react-bootstrap";

// components
import Title from "./title/index";
import Subtitle from "./subtitle/index.jsx";
import Thumbnail from "./thumbnail/index";
import Introduction from "./introduction/index";

export default function Post() {
    const { title } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        if (!title) return;
        setPost(POST_BY_TITLE[title]);
    }, [title]);

    return (
        <Container className="wrapper-post p-5">
            <Row>
                {post.title && (
                    <>
                        <Col xs={12} className="mb-5">
                            <header>
                                <Title title={post.title}></Title>
                                <Subtitle subtitle={post.subtitle}></Subtitle>
                            </header>
                        </Col>
                        <Col xs={12} className="mb-5">
                            <Thumbnail srcImage={post.thumbnail}></Thumbnail>
                        </Col>
                        <Col xs={12}>
                            <Introduction
                                intro={post.introduction}
                            ></Introduction>
                        </Col>
                    </>
                )}
            </Row>
        </Container>
    );
}
