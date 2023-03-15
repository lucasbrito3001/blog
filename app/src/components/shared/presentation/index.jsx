import "./styles.scss";

// icons
import InstagramIcon from "../../../assets/instagram.svg"
import GithubIcon from "../../../assets/github.svg"
import LinkedInIcon from "../../../assets/linkedin.svg"

export default function Presentation() {
    return (
        <article id="presentation-blog" className="p-4 py-lg-5 shadow">
            <h1>Bem-vindo ao meu blog!</h1>
            <p>
                Aqui você vai encontrar conteúdo sobre, desenvolvimento web, 
                arquitetura de software, carreira na área da programação e
                tutoriais sobre aplicação de tecnologias.
            </p>
            <p className="mb-0">Não deixe de ver minhas outras publicações, espero te ajudar!</p>
        </article>
    );
}
