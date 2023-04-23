import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";

import Logo from "../../shared/logo";

export default function Footer() {
    return (
        <section id="footer" className="px-4">
            <Container>
                <Row className="align-center g-5">
                    <Col xs="12" lg="6">
                        <header>
                            <h1 className="title">quem sou eu?</h1>
                            <p className="text">
                                Meu nome é Lucas de Brito, e eu tenho {(new Date()).getUTCFullYear() - 2000} anos.
                                <br />
                                Sou uma pessoa muito curiosa e ativa, e é somando isso com meu conhecimento técnico - em constante
                                desenvolvimento - que eu busco agregar valor para as equipes que participo. 
                                <br />
                                Acredito que com transparência, empatia e um grupo comprometido e responsável podemos resolver
                                qualquer problema!
                            </p>
                        </header>
                    </Col>
                    <Col xs="12" lg="3">
                        <div>
                            <header>
                                <h1 className="title">onde estou</h1>
                            </header>
                            <ul>
                                <li className="text-muted">Birigui / SP - Brasil</li>
                            </ul>
                        </div>
                        <div>
                            <header>
                                <h1 className="title">contatos</h1>
                            </header>
                            <ul>
                                <li>
                                    <span className="text-muted">email</span><br />
                                    devlucasmail@gmail.com
                                </li>
                                <li>
                                    <span className="text-muted">whatsapp</span><br />
                                    +55 (18) 99735-1747
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs="12" lg="3">
                        <header>
                            <h1 className="title">redes sociais</h1>
                        </header>
                        <ul className="network-list">
                            <a href="https://www.linkedin.com/in/lucasdbritodev/" target="_blank" className="network-links">
                                <li>linkedin</li>
                            </a>
                            <a href="https://github.com/lucasbrito3001" target="_blank" className="network-links">
                                <li>github</li>
                            </a>
                            <a href="https://www.instagram.com/lucasdbrito.dev/" target="_blank" className="network-links">
                                <li>instagram</li>
                            </a>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
