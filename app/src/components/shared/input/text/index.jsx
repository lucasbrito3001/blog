import { Form } from 'react-bootstrap';

export default function Select({ label, placeholder, size, onInput }) {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control 
                size={size} 
                type="text"
                placeholder={placeholder}
                onInput={onInput}
            />
        </Form.Group>
    )
}