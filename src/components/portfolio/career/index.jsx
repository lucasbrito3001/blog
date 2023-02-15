import { Badge, Col, Container, Row } from "react-bootstrap";

import { getCareer } from "../../../services/portfolio/career";
import { useEffect, useState } from "react";

import "./styles.scss";

import CV from "../../../assets/files/cv.pdf"

export default function Career() {
    const [career, setCareer] = useState([]);

    useEffect(() => {
        async function getCareerOnLoad() {
            const { status, content } = await getCareer();

            if (!status) return;

            setCareer(content);
        }

        getCareerOnLoad();
    }, []);

    return (
        <Container>
            <Row className="py-lg-5 py-4 career-section">
                <Col className="pb-3 pe-0 pe-lg-4 mb-4 mb-lg-0 career-section-title" xs={12} lg={5}>
                    <h1 className="sections-title">carreira</h1>
                    <p>Dados sobre minha carreira, habilidades e experiência acadêmica você consegue encontrar no meu currículo.</p>
                    <a href={CV} download="Lucas de Brito - Full Stack - CV">
                        <button className="project-button career-button">Baixar currículo <span className="ms-1">&darr;</span></button>
                    </a>
                </Col>
                <Col xs={12} lg={7} className="career-section-positions">
                    <ul className="career-list">
                        {career.length > 0 &&
                            career.map((enterprise, idxEnterprise) => {
                                return <div key={`enterprise-${idxEnterprise}`}>
                                    <li
                                        className="ps-0 ps-lg-4"
                                    >
                                        <div>
                                            <header className="mb-1">
                                                <h1 className="enterprise-name mb-0">
                                                    {enterprise.name}
                                                </h1>
                                                <span className="text-muted">{enterprise.place}</span>
                                            </header>
                                            <main>
                                                <ul>
                                                    {enterprise.positions.map(
                                                        (position, idxPosition) => (
                                                            <li
                                                                key={`enterprise-${idxEnterprise}-position-${idxPosition}`}
                                                                className={idxPosition < enterprise.positions.length - 1 ? "pb-4" : ""}
                                                            >
                                                                <div>
                                                                    <h2 className="positions-name">{position.name}</h2>
                                                                    <span className="positions-date">{position.time}</span>
                                                                    <p className="mb-1">{position.description}</p>
                                                                    {/* <ul className="d-flex flex-wrap gap-2">
                                                                        { position.technologies.map((tech, idxTech) => (
                                                                            <li 
                                                                                key={`enterprise-${idxEnterprise}-position-${idxPosition}-tech-${idxTech}`}
                                                                            >
                                                                                <Badge bg="dark" className="positions-techs-badge">{tech}</Badge>
                                                                            </li>
                                                                        )) }
                                                                    </ul> */}
                                                                </div>
                                                            </li>
                                                        )
                                                        )}
                                                </ul>
                                            </main>
                                        </div>
                                    </li>
                                    {
                                        idxEnterprise < (career.length - 1) &&
                                            <hr className={`${idxEnterprise < career.length - 1 ? "my-4" : ''} positions-separator`}/>
                                    }
                                </div>
                            })}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}
