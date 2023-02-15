// styles
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <Container>
            <Row className="py-5">
                <Col xs={12} lg={6}>
                    <header>
                        <h1 className="contact-text">
                            E aí, está enfrentando um problema e acredita que eu
                            posso te ajudar a resolver?
                            <br />
                            <span className="d-block mt-5 contact-text-talk">
                                Vamos conversar!
                            </span>
                        </h1>
                        <ul className="d-flex gap-4 mt-3">
                            <a href="https://wa.me/5518997351747" target="_blank">
                                <li className="contacts-links">whatsapp</li>
                            </a>
                            <a href="https://www.linkedin.com/in/webdevbrito/" target="_blank">
                                <li className="contacts-links">linkedin</li>
                            </a>
                            <a href="https://www.instagram.com/lucasdbrito.dev/" target="_blank">
                                <li className="contacts-links">instagram</li>
                            </a>
                        </ul>
                    </header>
                </Col>
                <Col xs={12} lg={6} className="mt-5 mt-lg-0">
                    <form>
                        <div className="mb-2">
                            <label
                                htmlFor="input-name"
                                className="contact-labels mb-1"
                            >
                                Nome
                            </label>
                            <input
                                onInput={(e) => setName(e.target.value)}
                                type="text"
                                name="name"
                                id="input-name"
                                className="contact-inputs"
                                placeholder="ex: Fulano de Tal"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="input-telephone"
                                className="contact-labels mb-1"
                            >
                                Telefone
                            </label>
                            <input
                                onInput={(e) => setPhone(e.target.value)}
                                type="tel"
                                name="telephone"
                                id="input-telephone"
                                className="contact-inputs"
                                placeholder="ex: (xx) xxxxx - xxxx"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="input-email"
                                className="contact-labels mb-1"
                            >
                                e-mail
                            </label>
                            <input
                                onInput={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="input-email"
                                className="contact-inputs"
                                placeholder="ex: fulanodetal@email.com"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="input-message"
                                className="contact-labels mb-1"
                            >
                                Mensagem
                            </label>
                            <div className="contact-textarea-wrapper">
                                <header className="contact-message-header mt-0">
                                    Olá, me chamo {name}.
                                </header>
                                <div className="contact-textarea-separator"></div>
                                <textarea
                                    onInput={(e) => setMessage(e.target.value)}
                                    name="message"
                                    id="input-message"
                                    cols="30"
                                    rows="10"
                                    className="contact-textarea mb-0"
                                    placeholder="Insira sua mensagem aqui"
                                >
                                </textarea>
                                <div className="contact-textarea-separator"></div>
                                <footer className="contact-message-footer mt-0">
                                    <span>Telefone para contato: {phone}</span><br />
                                    <span>e-mail: {email}</span>
                                </footer>
                            </div>
                        </div>
                        <button type="submit" className="contact-button mt-4">
                            Enviar email <span>&rarr;</span>
                        </button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}
