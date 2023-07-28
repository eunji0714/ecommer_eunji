import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>Copyright &copy; 은지House</Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;