import "./styles.scss";

import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
    return (
        <Container id="header" className="container">
            <Row>
                <Col>
                    <h1>Bem-vindo ao meu blog!</h1>
                    <h2>
                        Aqui você vai encontrar conteúdo sobre, desenvolvimento
                        e arquitetura de software, carreira na área da
                        programação e tutoriais sobre aplicação de tecnologias.
                    </h2>
                    <h2>Ou seja, conteúdo de ajuda para devs em geral!</h2>
                </Col>
            </Row>
        </Container>
    );
}
