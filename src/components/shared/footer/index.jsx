import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";

import InstagramIcon from "../../../assets/instagram.svg";
import GithubIcon from "../../../assets/github.svg";
import LinkedInIcon from "../../../assets/linkedin.svg";

export default function Footer() {
    return (
        <section id="footer" className="px-4">
            <Container>
                <Row className="align-center g-5">
                    <Col xs="12" md="6">
                        <header>
                            <h1 className="title">Quem sou eu?</h1>
                            <p className="text">
                                Meu nome é Lucas de Brito, sou um{" "}
                                <strong>DESENVOLVEDOR WEB FULL STACK</strong>,
                                especializado(ando) em JavaScript.
                                <br />
                                Além da parte de desenvolvimento, já passei por
                                experiências profissionais diversas, como gestão
                                de projetos e configuração de servidores linux e
                                domínios.
                                <br />
                                Acredito que com tempo e determinação podemos
                                solucionar qualquer problema, então, está tendo
                                algum problema e acha que eu posso te ajudar?
                                Entre em contato comigo!
                            </p>
                        </header>
                    </Col>
                    <Col>
                        <header>
                            <h1 className="title">Onde estou</h1>
                        </header>
                        <p className="text-muted">Birigui / SP - Brasil</p>
                        <header>
                            <h1 className="title">Contatos</h1>
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
                            <a href="https://lucasdbrito.com" target="_blank">
                                <span className="text-muted">meu site</span><br />
                                <li>https://lucasdbrito.com</li>
                            </a>
                        </ul>
                    </Col>
                    <Col>
                        <header>
                            <h1 className="title">Redes Sociais</h1>
                        </header>
                        <ul>
                            <a href="https://www.linkedin.com/in/webdevbrito/" target="_blank">
                                <li>linkedin</li>
                            </a>
                            <a href="https://github.com/lucasbrito3001" target="_blank">
                                <li>github</li>
                            </a>
                            <a href="https://www.instagram.com/lucasdbrito.dev/" target="_blank">
                                <li>instagram</li>
                            </a>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
