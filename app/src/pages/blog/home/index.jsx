// react hooks
import { useEffect, useRef, useState } from "react";

// components
import Header from "../../../components/shared/header";
import Filter from "../../../components/shared/filter";
import Posts from "../../../components/home/posts/index";
import Presentation from "../../../components/shared/presentation/index";
import Footer from "../../../components/shared/footer/index";

// styles
import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../../components/portfolio/navbar";

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
        placeholder: "Filtrar por palavras no título...",
        key: 2,
        type: "search",
        colsLg: "6",
        colsMd: "12",
    },
];

export default function Home() {
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
                <Navbar></Navbar>
            </div>
            <Filter
                id="filter"
                filterFields={FILTERS_FIELDS}
                submitForm={searchByFilters}
                setElementHeight={setFilterHeight}
            />
            <div className="wrapper-posts">
                <Container className="px-2 px-lg-0">
                    <Row className="pt-4 pb-5 py-lg-5 g-4 g-lg-0">
                        <Col xs="12">
                            <Posts
                                categories={categorySelected}
                                titleSearched={titleSearched}
                            />
                        </Col>
                        {/* <Col xs="12" md="6" lg="3">
                            <div style={{ top: `${filterHeight + 16}px` }} id="presentation" className="mx-2">
                                <Presentation />
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </div>
            <Footer/>
        </>
    );
}
