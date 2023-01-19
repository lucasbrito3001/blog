import { Form } from 'react-bootstrap';

export default function Select({ label, placeholder, size, onInput }) {
    return (
        <Form.Group>
            { label && <Form.Label>{label}</Form.Label> }
            <Form.Control 
                size={size} 
                type="search"
                placeholder={placeholder}
                onInput={onInput}
            />
        </Form.Group>
    )
}