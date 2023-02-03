import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss"

// componentes
import Navbar from "../../components/portfolio/navbar"
import Presentation from "../../components/portfolio/presentation"
import Domains from "../../components/portfolio/domains"
import Skills from "../../components/portfolio/skills"
import About from "../../components/portfolio/about"

export default function Portfolio() {
    return (
        <div>
            <header className="portfolio-header">
                <Navbar></Navbar>
            </header>
            <main className="portfolio-main">
                <div className="portfolio-presentation">
                    <Presentation></Presentation>
                </div>
                <div className="portfolio-about">
                    <About></About>
                </div>
                <div className="portfolio-domains">
                    <Domains></Domains>
                </div>
                <div id="portfolio-skills">
                    <Skills></Skills>
                </div>
                <div className="h-40" id="career">habilidades</div>
                <div className="h-40" id="skills">carreira</div>
                <div className="h-40" id="projects">projetos</div>
            </main>
        </div>
    );
}
