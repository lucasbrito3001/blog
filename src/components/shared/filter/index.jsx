import { useEffect, useRef } from "react";
import Select from "../input/select/index";
import Search from "../input/search/index";

import "./styles.scss";
import { Container, Row, Col, Button } from "react-bootstrap";

const filters = {};

export default function Filter({ filterFields, submitForm, setElementHeight }) {
    const filterRef = useRef()

    useEffect(() => {
        setElementHeight(filterRef.current.clientHeight);
    }, [])

    function renderFields() {
        const fieldByType = {
            select(field) {
                return (
                    <Select
                        size="md"
                        isMulti={field.isMulti}
                        // label={field.label}
                        selectOptions={field.options}
                        onChange={(e) => (filters[field.value] = e)}
                    />
                );
            },
            search(field) {
                return (
                    <Search
                        size="md"
                        // label={field.label}
                        placeholder={field.placeholder}
                        onInput={(e) => (filters[field.value] = e.target.value)}
                    />
                );
            },
        };

        return filterFields.map((field) => {
            return (
                <Col
                    className="mt-2 mt-lg-0"
                    key={field.key}
                    md={field.colsMd}
                    lg={field.colsLg}
                >
                    {fieldByType[field.type](field)}
                </Col>
            );
        });
    }

    function onSubmit(e) {
        e.preventDefault();
        submitForm(filters);
    }

    return (
        <section id="filter" className="py-5" ref={filterRef}>
            <Container>
                <form onSubmit={onSubmit}>
                    <Row className="mb-3">
                        <Col xs={12}>
                            <h1 className="title-blog">Blog</h1>
                        </Col>
                    </Row>
                    <div className="filters-fields">
                        <Row>
                            {renderFields()}
                            <Col
                                md={12}
                                lg={2}
                                className="mt-2 mt-lg-0 d-grid d-lg-flex"
                            >
                                <Button
                                    type="submit"
                                    size="md"
                                    variant="primary"
                                    className="mt-auto w-100"
                                >
                                    Buscar
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </form>
            </Container>
        </section>
    );
}
