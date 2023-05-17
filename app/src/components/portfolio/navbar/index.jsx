// styles
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";

// hooks
import { useEffect, useState } from "react";

import Logo from "../../shared/logo"
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(true)

    useEffect(() => {
        setIsMobile(window.innerWidth < 992)
    }, [])

    function toggleMenu() {
        if (isMobile) setIsCollapsed(!isCollapsed)
    }

    return (
        <nav>
            <div className="navbar-wrapper">
                <div className={`navbar ${!isCollapsed ? 'extended' : ""} ${isMobile ? 'mobile' : ""}`}>
                    <div id="navbar-logo-toggle">
                        <Link to="/" className="navbar-links" onClick={() => scrollTo(0, 0)}>
                            <Logo theme="dark"></Logo>
                        </Link>
                        {isMobile && <span id="navbar-menu-toggle" onClick={toggleMenu}></span>}
                    </div>
                    <ul className="navbar-list">
                        <li className="navbar-list-item" onClick={toggleMenu}>
                            <HashLink to="/#about" className="navbar-list-item-link">sobre</HashLink>
                        </li>
                        <li className="navbar-list-item" onClick={toggleMenu}>
                            <HashLink to="/#career" className="navbar-list-item-link">carreira</HashLink>
                        </li>
                        <li className="navbar-list-item" onClick={toggleMenu}>
                            <HashLink to="/#skills" className="navbar-list-item-link">habilidades</HashLink>
                        </li>
                        <li className="navbar-list-item" onClick={toggleMenu}>
                            <HashLink to="/#projects" className="navbar-list-item-link">projetos</HashLink>
                        </li>
                        <li className="navbar-list-item">
                            <Link to="/blog" className="navbar-list-item-link">blog</Link>
                        </li>
                        <li className="navbar-list-item" onClick={toggleMenu}>
                            <HashLink to="/#contacts" className="navbar-list-item-link">contato</HashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
