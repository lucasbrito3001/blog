import { Form } from "react-bootstrap";

import ReactSelect from "react-select";
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export default function Select({ label, size, selectOptions, isMulti, onChange }) {
    return (
        <Form.Group>
            { label && <Form.Label>{label}</Form.Label> }
            <ReactSelect
                isMulti={isMulti}
                components={animatedComponents}
                options={selectOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Selecione uma categoria..."
                onChange={onChange}
            />
        </Form.Group>
    );
}
