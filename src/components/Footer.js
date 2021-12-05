import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer(props) {
        
       return (
            <footer id="footer-bar" className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-2">
                <Col className="p-0" md={3} sm={12}>
                        
                    </Col>
                    <Col className="p-0 d-flex justify-content-centre" md={1} sm={12}>
                    <button id="icon-b" onClick={()=> window.open("https://www.linkedin.com/in/tristan-pieters-2520bb184/", "_blank")}>
                        <FontAwesomeIcon id="font-icon" className="p-2.5" icon={['fab', 'linkedin']} />
                        </button>
                        <button id="icon-b" onClick={()=> window.open("https://github.com/TristanPieters", "_blank")}>
                        <FontAwesomeIcon id="font-icon" className="p-2.5" icon={['fab', 'github']} /> 
                        </button>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        created by Tristan Pieters © 2021
                    </Col>
                </Row>
            </Container>
        </footer>
    )

}

export default Footer;

