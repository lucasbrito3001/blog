// styles
import "./styles.scss";
import { Col, Container, Row } from "react-bootstrap";

// react hooks
import { useState, useEffect } from "react";

// services
import { getSkills } from "../../../services/portfolio/skills";

export default function Skills() {
    const [currentSelected, setCurrentSelected] = useState(0);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        async function getSkillsOnLoad() {
            const { status, content } = await getSkills();

            if (!status) return;

            setSkills(content);
        }

        getSkillsOnLoad();
    }, []);

    return (
        <Container>
            <Row className="py-max flex-column">
                <Col className="pb-3">
                    <h1 className="sections-title">
                        habilidades e tecnologias
                    </h1>
                </Col>
                <Col>
                    <div>
                        <ul className="skills-list">
                            {skills.map((skill) => (
                                <li className="skills-list-items">
                                    <span className="skills-list-items-text">
                                        {skill}
                                    </span>
                                    <div className="skills-list-items-bg-hover"></div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
