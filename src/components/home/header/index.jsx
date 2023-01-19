import "./styles.scss";
import Logo from "../../../assets/logo.png"

import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
    return (
        <header id="header">
            <Container>
                <Row>
                    <Col>
                        <img id="logo" src={Logo} alt="logo com texto <blog.lucasdbrito.com>" />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}
