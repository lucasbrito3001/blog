import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";

export default function Presentation() {
    return (
        <div className="h-100 py-lg-0 py-5">
            <Container className="h-100">
                <Row className="h-100 align-items-center">
                    <Col xs={12} lg={7}>
                        <h2 className="subtitle presentation-subtitle">
                            Olá, sou o
                        </h2>
                        <h1 className="title presentation-title">
                            Lucas de Brito
                        </h1>
                        <p className="text presentation-describe">
                            Sou um <strong className="text-highlight">DESENVOLVEDOR WEB FULL STACK</strong>
                            , especializado(ando) em JavaScript. Acredito que com tempo e determinação podemos
                            solucionar qualquer problema
                        </p>
                        <h1 id="presentation-down-arrow">&darr;</h1>
                    </Col>
                    <Col xs={12} lg={5}>
                        <div className="presentation-techs-circle">
                            <div className="presentation-techs-circle-rotating">
                                <img
                                    id="presentation-techs-circle-node"
                                    className="presentation-techs-circle-icons"
                                    src="https://img.icons8.com/fluency/512/node-js.png"
                                    alt="nodejs logo"
                                    width={56}
                                />
                                <img
                                    id="presentation-techs-circle-react"
                                    className="presentation-techs-circle-icons"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
                                    alt="reactjs logo"
                                    width={48}
                                />
                                <img
                                    id="presentation-techs-circle-vue"
                                    className="presentation-techs-circle-icons"
                                    src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-color-tal-revivo.png"
                                    alt="vuejs logo"
                                    width={48}
                                />
                                <img
                                    id="presentation-techs-circle-mysql"
                                    className="presentation-techs-circle-icons"
                                    src="https://img.icons8.com/color/512/mysql-logo.png"
                                    alt="mysql logo"
                                    width={56}
                                />
                                <img
                                    id="presentation-techs-circle-javascript"
                                    className="presentation-techs-circle-icons"
                                    src="https://img.icons8.com/color/256/javascript.png"
                                    alt="javascript logo"
                                    width={56}
                                />
                                <img
                                    id="presentation-techs-circle-sqlserver"
                                    className="presentation-techs-circle-icons"
                                    src="https://img.icons8.com/color/512/microsoft-sql-server.png"
                                    alt="sql server logo"
                                    width={56}
                                />
                                <img
                                    id="presentation-techs-circle-linux"
                                    className="presentation-techs-circle-icons"
                                    src="https://img.icons8.com/color/512/linux.png"
                                    alt="linux logo"
                                    width={56}
                                />
                                <img
                                    id="presentation-techs-circle-css"
                                    className="presentation-techs-circle-icons"
                                    src="https://img.icons8.com/color/512/css3.png"
                                    alt="css logo"
                                    width={56}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
