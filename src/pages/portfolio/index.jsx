import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss"

// componentes
import Navbar from "../../components/portfolio/navbar"
import Presentation from "../../components/portfolio/presentation"

export default function Portfolio() {
    return (
        <>
            <header className="portfolio-header">
                <Navbar></Navbar>
            </header>
            <main className="portfolio-main">
                <div id="portfolio-presentation">
                    <Presentation></Presentation>
                </div>
                <div className="h-40" id="about">sobre</div>
                <div className="h-40" id="career">habilidades</div>
                <div className="h-40" id="skills">carreira</div>
                <div className="h-40" id="projects">projetos</div>
            </main>
        </>
    );
}
