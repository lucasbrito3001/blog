// react hooks
import { useCallback, useEffect, useState } from "react";

// components
import Filter from "../../../components/shared/filter";
import Posts from "../../../components/home/posts/index";
import Footer from "../../../components/shared/footer/index";

// styles
import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../../components/portfolio/navbar";
import { getPosts } from "../../../services/posts";
import { joinObjectsKeyInARow } from "../../../services/blog";

const FILTERS_FIELDS = [
    {
        label: "Assunto",
        value: "categories",
        key: 1,
        type: "select",
        isMulti: true,
        colsLg: "4",
        colsMd: "12",
        options: [
            { label: "Estrutura de Dados", value: "data-structure" },
            { label: "JavaScript", value: "js" },
            { label: "TypeScript", value: "ts" },
            { label: "DevOps", value: "devops" },
        ],
    },
    {
        label: "Buscar no título",
        value: "title",
        placeholder: "Filtrar por palavras no título...",
        key: 2,
        type: "search",
        colsLg: "6",
        colsMd: "12",
    },
];

export default function Home() {
    const limit = 12

    const [page, setPage] = useState(0)
    const [postsToRender, setPostsToRender] = useState([])

    function searchByFilters(values) {
        const joinedCategories = values.categories
            ? joinObjectsKeyInARow(values.categories, 'value', ',')
            : null
        handleGetPosts(values.title, joinedCategories)
    }

    useEffect(() => {
        handleGetPosts()
    }, [])

    async function handleGetPosts(title, categories) {
        const res = await getPosts({ 
            page,
            limit,
            title,
            categories 
        })
        setPostsToRender(res.content)
    }

    return (
        <>
            <div id="blog-navbar">
                <Navbar></Navbar>
            </div>
            <Filter
                id="filter"
                filterFields={FILTERS_FIELDS}
                submitForm={searchByFilters}
            />
            <div className="wrapper-posts">
                <Container className="px-2 px-lg-0">
                    <Row className="pt-4 pb-5 py-lg-5 g-4 g-lg-0">
                        <Col xs="12">
                            <Posts posts={postsToRender}/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </>
    );
}
