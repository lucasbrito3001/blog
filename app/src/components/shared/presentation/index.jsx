import "./styles.scss";

// icons
import InstagramIcon from "../../../assets/instagram.svg"
import GithubIcon from "../../../assets/github.svg"
import LinkedInIcon from "../../../assets/linkedin.svg"

export default function Presentation() {
    return (
        <article id="presentation-blog" className="p-4 shadow h-100">
            <h1>Bem-vindo ao meu blog!</h1>
            <p>
                Aqui você vai encontrar conteúdo sobre, programação, desenvolvimento web,
                arquitetura de software, e devops.
            </p>
            <p className="mb-0">Não deixe de ver minhas outras publicações, espero te ajudar!</p>
        </article>
    );
}
