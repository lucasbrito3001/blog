// styles
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import { useState } from "react";

import Slide from "react-reveal/Slide"
import * as EmailValidator from 'email-validator'

import { sendMail } from "../../../services/mailer"
import { toast } from "react-toastify";

export default function Contact() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSendingEmail, setIsSendingEmail] = useState(false)
    const [errors, setErrors] = useState([])

    const formFieldsRules = {
        name: name.length > 0,
        phone: phone.length >= 10,
        email: EmailValidator.validate(email),
        message: message.length > 0
    }

    function validateFormField(field) {
        const fieldsWithError = formFieldsRules[field]
            ? errors.filter(error => error !== field)
            : [...errors, field]

        setErrors(fieldsWithError)
    }

    async function sendMessage(event) {
        try {
            event.preventDefault()

            const emailInfos = [
                { key: 'name', value: name },
                { key: 'phone', value: phone },
                { key: 'email', value: email },
                { key: 'message', value: message }
            ]

            const emailInfosErrors = []

            emailInfos.forEach(info => {
                if(!info.value) emailInfosErrors.push(info.key)
            })

            if(emailInfosErrors.length > 0) return setErrors(emailInfosErrors)

            setIsSendingEmail(true)
            setErrors([])
            setName('')
            setPhone('')
            setEmail('')
            setMessage('')

            const bodyMessage = `
                Olá, me chamo ${name}.
    
                ${message}
    
                Contatos
                ---------------------------
                Telefone: ${phone}
                e-mail: ${email}
                
            `
    
            const result = await sendMail({ 
                subject: 'Novo email enviado pelo portfolio',
                text: bodyMessage
            })

            toast[result.status && !!result.status ? 'success' : 'error'](result.message, {
                position: toast.POSITION.TOP_RIGHT,
                collapseDuration: 300,
                enter: 'zoomIn', 
                exit: 'zoomOut'
            })

            setIsSendingEmail(false)
        } catch (error) {
            
        }
    }

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
                    <Slide bottom cascade>
                        <form onSubmit={sendMessage}>
                            <div className="mb-3">
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
                                    className={`
                                        ${errors.includes('name') ? 'input-error' : ''} 
                                        ${formFieldsRules['name'] ? 'input-success' : ''}
                                        contact-inputs
                                    `}
                                    placeholder="ex: Fulano de Tal"
                                    onChange={() => validateFormField('name')}
                                    onKeyDown={(e) => e.key === 'Tab' ? validateFormField('name') : ''}
                                    value={name}
                                />
                                {/* <small className={ errors.includes('name') ? 'error-label' : 'neutral-label' }>* o nome é obrigatório</small> */}
                            </div>
                            <div className="mb-3">
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
                                    className={`
                                        ${errors.includes('phone') ? 'input-error' : ''} 
                                        ${formFieldsRules['phone'] ? 'input-success' : ''}
                                        contact-inputs
                                    `}
                                    placeholder="ex: (xx) xxxxx - xxxx"
                                    onChange={() => validateFormField('phone')}
                                    onKeyDown={(e) => e.key === 'Tab' ? validateFormField('phone') : ''}
                                    value={phone}
                                />
                                {/* <small className={ errors.includes('phone') ? 'error-label' : 'neutral-label' }>* o telefone é obrigatório</small> */}
                            </div>
                            <div className="mb-3">
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
                                    className={`
                                        ${errors.includes('email') ? 'input-error' : ''} 
                                        ${formFieldsRules['email'] ? 'input-success' : ''}
                                        contact-inputs
                                    `}
                                    placeholder="ex: fulanodetal@email.com"
                                    onChange={() => validateFormField('email')}
                                    onKeyDown={(e) => e.key === 'Tab' ? validateFormField('email') : ''}
                                    value={email}
                                />
                                {/* <small className={ errors.includes('email') ? 'error-label' : 'neutral-label' }>* o email é inválido</small> */}
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="input-message"
                                    className="contact-labels mb-1"
                                >
                                    Mensagem
                                </label>
                                <div 
                                    className={`
                                        ${errors.includes('message') ? 'input-error' : ''} 
                                        ${formFieldsRules['message'] ? 'input-success' : ''}
                                        contact-inputs
                                    `}
                                >
                                    <header className="contact-message-header mt-0">
                                        Olá, me chamo {name}.
                                    </header>
                                    <div className="contact-textarea-separator"></div>
                                    <textarea
                                        onInput={(e) => setMessage(e.target.value)}
                                        name="message"
                                        id="input-message"
                                        cols="30"
                                        rows="6"
                                        className="contact-textarea mb-0"
                                        placeholder="Insira sua mensagem aqui"
                                        onChange={() => validateFormField('message')}
                                        onKeyDown={(e) => e.key === 'Tab' ? validateFormField('message') : ''}
                                        value={message}
                                    >
                                    </textarea>
                                    <div className="contact-textarea-separator"></div>
                                    <footer className="contact-message-footer mt-0">
                                        <span>Telefone para contato: {phone}</span><br />
                                        <span>e-mail: {email}</span>
                                    </footer>
                                </div>
                                {/* <small className={ errors.includes('message') ? 'error-label' : 'neutral-label' }>* o mensagem é obrigatória</small> */}
                            </div>
                            <button type="submit" className="contact-button mt-4" disabled={isSendingEmail}>
                                { isSendingEmail 
                                    ? <span>Enviando email...</span>
                                    : <span>Enviar mensagem <span>&rarr;</span></span>
                                }
                            </button>
                        </form>
                    </Slide>
                </Col>
            </Row>
        </Container>
    );
}
