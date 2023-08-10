// styles
import "./styles.scss";
import { Col, Container, Row } from "react-bootstrap";

// react hooks
import { useState, useEffect } from "react";

// services
import { getSkills } from "../../../services/portfolio/skills";

// components
import BadgeHover from "../../shared/badgeHover"
import { Fade } from "react-awesome-reveal";

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
            <Row className="py-lg-5 py-4 flex-column">
                <Col className="pb-3">
                    <h1 className="sections-title">
                        habilidades e tecnologias
                    </h1>
                </Col>
                <Col>
                    <div>
                        <Fade right>
                            <ul className="skills-list">
                                {skills.map((skill, idx) => (
                                        <li className="skills-list-items" key={idx}>
                                            <BadgeHover text={skill}/>
                                        </li>
                                ))}
                            </ul>
                        </Fade>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
