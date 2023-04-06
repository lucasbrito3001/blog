// react hooks
import { useEffect, useState } from "react";

// components
import Post from "../../../components/post/index";
import Presentation from "../../../components/shared/presentation/index";
import Footer from "../../../components/shared/footer/index";

// styles
import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../../components/portfolio/navbar";
import PostHeader from "../../../components/post/header";

const FILTERS_FIELDS = [
    {
        label: "Assunto",
        value: "category",
        key: 1,
        type: "select",
        isMulti: true,
        colsLg: "4",
        colsMd: "12",
        options: [
            { label: "Arquitetura", value: "architecture" },
            { label: "Desenvolvimento", value: "development" },
            { label: "Tutorial", value: "tutorial" },
            { label: "Carreira", value: "career" },
        ],
    },
    {
        label: "Buscar no título",
        value: "title",
        placeholder: "Busque um texto para filtrarmos no título",
        key: 2,
        type: "search",
        colsLg: "6",
        colsMd: "12",
    },
];

import HANDLE_ARRAY from "../../../posts/handleArray/index.js";
import API_INTEGRATION from "../../../posts/apiIntegration/index.js";
import TEST_CODE from "../../../posts/testCode/index.js";
import { useParams } from "react-router-dom";
import RecentPosts from "../../../components/post/recentPosts";
import STACK_TYPESCRIPT from "../../../posts/stackTypescript";

const POST_BY_TITLE = {
    "manipulação-de-arrays-javascript-es6": HANDLE_ARRAY,
    "testando-quadro-de-código-no-post": TEST_CODE,
    "como-consumir-uma-api-com-javascript": API_INTEGRATION,
    "pilhas-em-typescript": STACK_TYPESCRIPT
};

export default function Home() {
    const { title } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        if (!title) return;
        setPost(POST_BY_TITLE[title]);
        window.scrollTo(0, 0)
    }, [title]);

    const [categorySelected, setCategorySelected] = useState("");
    const [titleSearched, setTitleSearched] = useState("");

    const [filterHeight, setFilterHeight] = useState(0);

    function searchByFilters(values) {
        setCategorySelected(values.category);
        setTitleSearched(values.title);
    }

    return (
        <>
            <div id="blog-navbar">
                <Navbar />
            </div>
            <div className="wrapper-post">
                { post.categories && (
                    <PostHeader
                        postTitle={post.title}
                        postSubtitle={post.subtitle}
                        postCategories={post.categories}
                    ></PostHeader>
                )}
                <Container>
                    <Row className="py-4 gy-4">
                        <Col xs="12">
                            <Post post={post} />
                        </Col>
                        <Col xs="12">
                            <aside
                                style={{
                                    position: "sticky",
                                    top: `calc(${filterHeight + 16}px + 10vh)`,
                                }}
                                id="presentation"
                            >
                                <Row className="gy-3">
                                    <Col xs="12" lg="5" xxl="4">
                                        <div className="h-100">
                                            <Presentation />
                                        </div>
                                    </Col>
                                    <Col xs="12" lg="7" xxl="8">
                                        <div className="h-100">
                                            <RecentPosts />
                                        </div>
                                    </Col>
                                </Row>
                            </aside>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
}
