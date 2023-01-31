// styles
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";

// hooks
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(true)

    useEffect(() => {
        console.log(window.innerWidth)
        setIsMobile(window.innerWidth < 992)
    }, [])

    function toggleMenu() {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <nav>
            <div className="navbar-wrapper">
                <div className={`navbar ${ !isCollapsed ? 'extended' : "" } ${ isMobile ? 'mobile' : "" }`}>
                    <div id="navbar-logo-toggle">
                        <span id="navbar-logo">lucasdbrito<span id="navbar-logo-color">.com</span></span>
                        { isMobile && <span id="navbar-menu-toggle" onClick={toggleMenu}></span> }
                    </div>
                    <ul className="navbar-list">
                        <li className="navbar-list-item"><a href="#about" className="navbar-list-item-link">sobre</a></li>
                        <li className="navbar-list-item"><a href="#skills" className="navbar-list-item-link">habilidades</a></li>
                        <li className="navbar-list-item"><a href="#career" className="navbar-list-item-link">carreira</a></li>
                        <li className="navbar-list-item"><a href="#projects" className="navbar-list-item-link">projetos</a></li>
                        <li className="navbar-list-item"><a href="/#/blog" className="navbar-list-item-link">blog</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
