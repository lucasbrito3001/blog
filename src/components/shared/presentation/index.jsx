import "./styles.scss";

// icons
import InstagramIcon from "../../../assets/instagram.svg"
import GithubIcon from "../../../assets/github.svg"
import LinkedInIcon from "../../../assets/linkedin.svg"

export default function Presentation() {
    return (
        <article id="presentation-blog">
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
                <a className="network-links" href="https://www.linkedin.com/in/webdevbrito/" target="_blank">
                    <li><img width={36} src={LinkedInIcon} alt="logo do linkedin"/></li>
                </a>
                <a className="network-links" href="https://github.com/lucasbrito3001" target="_blank">
                    <li><img width={36} src={GithubIcon} alt="logo do github"/></li>
                </a>
                <a className="network-links" href="https://www.instagram.com/lucasdbrito.dev/" target="_blank">
                    <li><img width={36} src={InstagramIcon} alt="logo do instagram"/></li>
                </a>
            </ul>
        </article>
    );
}
