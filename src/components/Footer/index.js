import React from 'react';
import { Col, Row, Well } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import './index.css';

export default class Footer extends React.Component {
    render() {
        return (
            <Well>
                <Row className="row-center">
                    <Col xsOffset={3} xs={3}>
                        <Row>
                            <SocialIcon url="https://github.com/sirjakesalot" />
                        </Row>
                        <Row>GitHub</Row>
                    </Col>
                    <Col xs={3}>
                        <Row>
                            <SocialIcon url="https://www.linkedin.com/in/jacobarmentrout/" />
                        </Row>
                        <Row>Linkedin</Row>
                    </Col>
                </Row>
            </Well>
        )
    }
}