import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <Container className={"mt-5"}>
            <footer style={{ bottom:"0", textAlign:"center"}} className={"blockquote-footer"}>
                <p className="">Copyright &copy; 은지House</p>
            </footer>
        </Container>


    );
};

export default Footer;