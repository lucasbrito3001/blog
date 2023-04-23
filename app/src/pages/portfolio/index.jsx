import { Col, Container, Row } from "react-bootstrap";
import Fade from 'react-reveal/Slide';
import "./styles.scss"

// componentes
import Navbar from "../../components/portfolio/navbar"
import Presentation from "../../components/portfolio/presentation"
import Domains from "../../components/portfolio/domains"
import Skills from "../../components/portfolio/skills"
import About from "../../components/portfolio/about"
import Career from "../../components/portfolio/career"
import Projects from "../../components/portfolio/projects"
import Contact from "../../components/portfolio/contact"
import Blog from "../../components/portfolio/blog"
import Footer from "../../components/shared/footer"
import { useEffect, useState } from "react";

export default function Portfolio() {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollTop(window.scrollY);
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <header className="portfolio-header">
                <Navbar scrollTop={scrollTop} transitionHeight={700}></Navbar>
            </header>
            <main className="portfolio-main">
                <div id="presentation" className="portfolio-presentation">
                    <Presentation></Presentation>
                </div>
                <div id="about" className="portfolio-about">
                    <About></About>
                </div>
                <div id="domains" className="portfolio-domains">
                    <Domains></Domains>
                </div>
                <div id="career">
                    <Career></Career>
                </div>
                <div id="skills" className="portfolio-skills">
                    <Skills></Skills>
                </div>
                <div id="projects" className="portfolio-projects">
                    <Projects></Projects>
                </div>
                <div className="portfolio-blog">
                    <Blog></Blog>
                </div>
                <div id="contacts" className="portfolio-contacts">
                    <Contact></Contact>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </main>
        </div>
    );
}
