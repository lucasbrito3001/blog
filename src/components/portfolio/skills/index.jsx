import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import { useEffect } from "react";
import { useState } from "react";

export default function Skills() {
    const [currentSelected, setCurrentSelected] = useState(0);

    const skills = ["JavaScript", "React", "Vue", "Node", "Express", "MySQL", "SQL Server", "MongoDB"];

    setInterval(() => {
        setCurrentSelected(
            currentSelected === domains.length - 1 ? 0 : currentSelected + 1
        );
    }, 4000);

    return (
        <Container>
            <Row className="py-5 py-md-5">
                <Col>
                    <h1 className="domain-title py-5">habilidades e tecnologias</h1>
                    <div>
                        <ul className="skills-list">
                            { skills.map(skill => <li className="skills-list-items">{skill}</li>)}
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
