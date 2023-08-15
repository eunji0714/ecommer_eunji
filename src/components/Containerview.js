import React from 'react';
import {Container, Row} from "react-bootstrap";

const Containerview = ({title, children}) => {
    return (
        <Container className={"mt-3 pt-4"}>
            <h2 className={"fw-bold"}>{title}</h2>
            <Row className={"justify-content-md-center"}>
                {children}
            </Row>
        </Container>
    );
};

export default Containerview;