import { Col, Container, Row } from "react-bootstrap";

// import { getCareer } from "../../../services/portfolio/career";
import { useEffect, useState } from "react";

import "./styles.scss";

export default function Projects() {
    const [selected, setSelected] = useState(null);

    return (
        <Container>
            <Row className="pt-5">
                <Col>
                    <header>
                        <h1 className="sections-title title-light">projetos</h1>
                    </header>
                </Col>
            </Row>
            <Row className="pb-5">
                <Col
                    onMouseLeave={() => setSelected(null)}
                    onMouseEnter={() => setSelected(0)}
                    className={`projects-div p-0 ${
                        selected === 0
                            ? "col-lg-6"
                            : selected === null
                            ? "col-lg-4"
                            : "col-lg-3"
                    }`}
                >
                    <img src="https://lucasdbrito.com/img/dexterbulls.2db70c57.png" alt="" />
                </Col>
                <Col
                    onMouseLeave={() => setSelected(null)}
                    onMouseEnter={() => setSelected(1)}
                    className={`projects-div ${
                        selected === 1
                            ? "col-lg-6"
                            : selected === null
                            ? "col-lg-4"
                            : "col-lg-3"
                    }`}
                >
                    <img src="https://lucasdbrito.com/img/dexterbulls.2db70c57.png" alt="" />
                </Col>
                <Col
                    onMouseLeave={() => setSelected(null)}
                    onMouseEnter={() => setSelected(2)}
                    className={`projects-div ${
                        selected === 2
                            ? "col-lg-6"
                            : selected === null
                            ? "col-lg-4"
                            : "col-lg-3"
                    }`}
                >
                    <img src="https://lucasdbrito.com/img/dexterbulls.2db70c57.png" alt="" />
                </Col>
            </Row>
        </Container>
    );
}
