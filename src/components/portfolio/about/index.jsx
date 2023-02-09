import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import { useEffect } from "react";
import { useState } from "react";

import RandomWaves from "../../../assets/random-waves.png"

export default function About() {
    const [currentSelected, setCurrentSelected] = useState(0);

    const domains = ["Front-end", "Back-end", "Full Stack", "DevOps"];

    setInterval(() => {
        setCurrentSelected(
            currentSelected === domains.length - 1 ? 0 : currentSelected + 1
        );
    }, 4000);

    return (
        <Container>
            <Row className="py-max">
                <Col xs={12}>
                    <h1 className="sections-title text-start">
                        quem sou eu?
                    </h1>
                </Col>
                <Col xs={12} lg={8}>
                    <p className="about-text mb-0">
                        Meu nome é Lucas de Brito, sou um DESENVOLVEDOR WEB
                        FULL STACK, especializado(ando) em JavaScript. Além
                        da parte de desenvolvimento, já passei por
                        experiências profissionais diversas, como gestão de
                        projetos e configuração de servidores linux e
                        domínios. Acredito que com tempo e determinação
                        podemos solucionar qualquer problema, então, está
                        tendo algum problema e acha que eu posso te ajudar?
                        Entre em contato comigo!
                    </p>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                    <p className="about-side">{`</>`}</p>
                </Col>
            </Row>
        </Container>
    );
}
