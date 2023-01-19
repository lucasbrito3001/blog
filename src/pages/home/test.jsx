// react hooks
import { useEffect, useRef, useState } from "react";

// components
import Header from "../../components/home/header";
import Filter from "../../components/shared/filter";
import Posts from "../../components/home/posts/index";
import Presentation from "../../components/shared/presentation/index";

// styles
import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";

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
            <Header />
            <Filter
                id="filter"
                filterFields={FILTERS_FIELDS}
                submitForm={searchByFilters}
                setElementHeight={setFilterHeight}
            />
            <div className="wrapper-posts">
                <Container style={{ height: "220vh" }}>
                    <Row style={{ height: "220vh" }} className="py-4">
                        <Col xs="12" md="6" lg="9">
                            <Posts
                                categories={categorySelected}
                                titleSearched={titleSearched}
                            />
                        </Col>
                        <Col xs="12" md="6" lg="3">
                            <div style={{ top: `${filterHeight + 16}px` }} id="presentation">
                                <Presentation />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
