import Select from "../input/select/index";
import Text from "../input/text/index";

import { Container, Row, Col, Button } from "react-bootstrap";

export default function Filter({ filterFields }) {
    function renderFields() {
        const fieldByType = {
            select(label, options) {
                return (
                    <Select size="md" label={label} selectOptions={options} />
                );
            },
            text(label, placeholder) {
                return <Text size="md" label={label} placeholder={placeholder}/>;
            },
        };

        return filterFields.map((field) => {
            return (
                <Col
                    className="mt-2 mt-lg-0"
                    key={field.key}
                    md={field.colsMd}
                    lg={field.colsLg}
                >
                    {fieldByType[field.type](field.label, field.options || field.placeholder)}
                </Col>
            );
        });
    }

    return (
        <Container>
            <Row>
                {renderFields()}
                <Col md={12} lg={2} className="mt-2 mt-lg-0 d-grid d-lg-flex">
                    <Button size="md" variant="primary" className="mt-auto w-100">
                        Buscar
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
