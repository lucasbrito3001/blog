import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import { useEffect } from "react";
import { useState } from "react";

export default function Domains() {
    const [currentSelected, setCurrentSelected] = useState(0);

    const domains = ["Front-end", "Back-end", "Full Stack", "DevOps"];

    setInterval(() => {
        setCurrentSelected(
            currentSelected === domains.length - 1 ? 0 : currentSelected + 1
        );
    }, 2500);

    return (
        <Container>
            <Row className="py-5 py-md-5">
                <Col>
                    <h1 className="sections-title py-5 text-start text-md-end">áreas que possuo <br />experiências profissionais</h1>
                    <div className="text-left text-md-center">
                        {domains.map((domain, idx) => {
                            return (
                                <span key={idx}>
                                    <span
                                        className={
                                            currentSelected === idx
                                                ? "selected-domain"
                                                : "domain"
                                        }
                                    >
                                        {domain}
                                    </span>{" "}
                                    {idx < domains.length - 1 && "/ "}
                                </span>
                            );
                        })}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
