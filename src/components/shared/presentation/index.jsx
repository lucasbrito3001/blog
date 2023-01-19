import "./styles.scss";

// icons
import InstagramIcon from "../../../assets/instagram.svg"
import GithubIcon from "../../../assets/github.svg"
import LinkedInIcon from "../../../assets/linkedin.svg"

import { Container, Row, Col } from "react-bootstrap";

export default function Presentation() {
    return (
        <article id="presentation">
            <h1>Bem-vindo ao meu blog!</h1>
            <p>
                Aqui você vai encontrar conteúdo sobre, desenvolvimento e
                arquitetura de software, carreira na área da programação e
                tutoriais sobre aplicação de tecnologias.
            </p>
            <p>Ou seja, conteúdo de ajuda para devs em geral!</p>

            <hr />

            <p>Minhas redes sociais:</p>
            <ul className="network-list">
                <a href="" target="_blank">
                    <li><img width={32} src={LinkedInIcon} alt="logo do linkedin"/></li>
                </a>
                <a href="" target="_blank">
                    <li><img width={32} src={GithubIcon} alt="logo do github"/></li>
                </a>
                <a href="" target="_blank">
                    <li><img width={32} src={InstagramIcon} alt="logo do instagram"/></li>
                </a>
            </ul>
        </article>
    );
}
