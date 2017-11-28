import React from 'react';
import { PageHeader, Panel, Image, Col, Row } from 'react-bootstrap';
import './index.css';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <PageHeader>DevOps Engineer and Software Developer</PageHeader>
                <Row>
                    <Col xs={12} sm={6}>
                        <Panel>
                            <Row>
                                <Col xs={12}>
                                    <Image src="portrait.jpg" circle responsive className="center-block" />
                                    <hr />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4} className="panel-strong-h4">
                                    <h4>Name:</h4>
                                    <h4>Email:</h4>
                                    <h4>Phone:</h4>
                                    <h4>Hobbies:</h4>
                                </Col>
                                <Col xs={8} className="panel-weak-h4">
                                    <h4>Jacob Armentrout</h4>
                                    <h4>jarmentr7@gmail.com</h4>
                                    <h4>123-3214</h4>
                                    <h4>Escape Rooms</h4>
                                    <h4>Video Games</h4>
                                    <h4>Netflix</h4>
                                    <h4>Riddles</h4>
                                    <h4>Draft beer</h4>
                                </Col>
                            </Row>
                        </Panel>
                    </Col>
                </Row>
            </div>
        )
    }
}