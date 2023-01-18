import { Form } from 'react-bootstrap';

export default function Select({ label, placeholder, size }) {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control 
                size={size} 
                type="search"
                placeholder={placeholder}
            />
        </Form.Group>
    )
}