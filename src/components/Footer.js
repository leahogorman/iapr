import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {

    return(
        <footer className="mt-5">
            <Container className="sticky-bottom">
                <Row className="justify-content-between p-3">
                    <Col className="pr-5 d-flex justify-content-center">
                        IAPR Education Committee © 2021
                    </Col>
                </Row>
            </Container>
        </footer>
    )

}
export default Footer;