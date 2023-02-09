import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss"

// componentes
import Navbar from "../../components/portfolio/navbar"
import Presentation from "../../components/portfolio/presentation"
import Domains from "../../components/portfolio/domains"
import Skills from "../../components/portfolio/skills"
import About from "../../components/portfolio/about"
import Career from "../../components/portfolio/career"
import Projects from "../../components/portfolio/projects"
import Footer from "../../components/shared/footer"

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
                <div id="career">
                    <Career></Career>
                </div>
                <div className="portfolio-skills">
                    <Skills></Skills>
                </div>
                <div className="portfolio-projects">
                    <Projects></Projects>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </main>
        </div>
    );
}
