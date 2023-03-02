import { Form } from 'react-bootstrap';
import './styles.scss'

export default function Select({ label, placeholder, size, onInput }) {
    return (
        <Form.Group>
            { label && <Form.Label className="inputs-label">{label}</Form.Label> }
            <Form.Control 
                size={size} 
                type="search"
                placeholder={placeholder}
                onInput={onInput}
            />
        </Form.Group>
    )
}