import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import { useEffect } from "react";
import { useState } from "react";

import Fade from "react-reveal/Fade";

import DeveloperSvg from "../../../assets/images/code_typing.gif";

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
            <Row className="py-lg-5 pt-5 pb-4">
                <Col xs={12}>
                    <h1 className="sections-title text-start">quem sou eu?</h1>
                </Col>
                <Col xs={12} lg={7}>
                    <Fade>
                        <p className="about-text mb-0">
                            Meu nome é Lucas de Brito, tenho {(new Date()).getUTCFullYear() - 2000} anos e, na verdade,
                            a imagem que vc está vendo me representa bastante, amo basicamente tudo que tem nela, café, plantas e
                            tecnologia.
                            <br />
                            Sou uma pessoa muito curiosa e ativa, e é somando isso com meu conhecimento técnico - em constante
                            desenvolvimento - que eu busco agregar valor para as equipes que participo. 
                            <br />
                            Acredito que com transparência, empatia e um grupo comprometido e responsável, podemos resolver
                            qualquer problema!
                        </p>
                    </Fade>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                    <img
                        src={DeveloperSvg}
                        alt="um desenvolvedor sentado em uma mesa com um computador, cercado por telas de terminais"
                        width={400}
                    />
                </Col>
            </Row>
        </Container>
    );
}
