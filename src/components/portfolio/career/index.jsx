import { Badge, Col, Container, Row } from "react-bootstrap";

import { getCareer } from "../../../services/portfolio/career";
import { useEffect, useState } from "react";

import "./styles.scss";

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
            <Row className="py-max flex-column">
                <Col>
                    <h1 className="sections-title">carreira</h1>
                </Col>
                <Col>
                    <ul className="career-list">
                        {career.length > 0 &&
                            career.map((enterprise, idxEnterprise) => {
                                return <>
                                    <li
                                        key={`enterprise-${idxEnterprise}`}
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
                                                                className={idxPosition < enterprise.positions.length - 1 && "pb-4"}
                                                            >
                                                                <div>
                                                                    <h2 className="positions-name">{position.name}</h2>
                                                                    <span className="positions-date">{position.time}</span>
                                                                    <p className="mb-1">{position.description}</p>
                                                                    <ul className="d-flex flex-wrap gap-2">
                                                                        { position.technologies.map(tech => (
                                                                            <li><Badge className="positions-techs-badge">{tech}</Badge></li>
                                                                        )) }
                                                                    </ul>
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
                                            <hr className={`${idxEnterprise < career.length - 1 && "my-4"} positions-separator`}/>
                                    }
                                </>
                            })}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}
