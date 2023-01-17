import { Form } from 'react-bootstrap';

export default function Select({ label, size }) {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control size={size} type="search"></Form.Control>
        </Form.Group>
    )
}