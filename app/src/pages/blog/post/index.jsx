// react hooks
import { useEffect, useRef, useState } from "react";

// components
import Header from "../../../components/shared/header";
import Filter from "../../../components/shared/filter";
import Post from "../../../components/post/index";
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
        placeholder: "Busque um texto para filtrarmos no título",
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
                <Navbar />
            </div>
            <div className="wrapper-posts">
                <Container>
                    <Row className="py-4 gx-lg-4 gy-lg-0">
                        <Col xs="12" lg="9" className="mb-4 mb-lg-0">
                            <Post/>
                        </Col>
                        <Col xs="12" lg="4">
                            {/* <div style={{ top: `${filterHeight + 16}px` }} id="presentation" className="mx-0 mx-lg-2">
                                <Presentation />
                            </div> */}
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </>
    );
}
