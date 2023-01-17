import { Form } from 'react-bootstrap';

export default function Select({ label, size, selectOptions }) {
    function renderOptions() {
        return selectOptions.map(option => <option key={option.value} value={option.value}>{option.text}</option>)
    }

    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Select size={size} id="select">
                {renderOptions()}
            </Form.Select>
        </Form.Group>
    )
}