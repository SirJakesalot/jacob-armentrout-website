import React from 'react';
import { Col, Thumbnail, Image, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './index.css';

const logos = {
    'python' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2000px-Python.svg.png',
    'ansible': 'https://labs.consol.de/assets/images/ansible-logo.png',
    'redhat': 'https://cdn1.iconfinder.com/data/icons/nuove/128x128/apps/redhat.png',
    'desk': '/StandingDesk.png',
    'portrait': '/portrait.jpg',
    'wd': '/wd.jpg',
    'hgst': 'hgst.png',
    'uci_cs': 'uci_cs.jpg',
    'veeva': 'veeva.jpg'
}

export default class InternalTile extends React.Component {
    render() {
        return (
            <Col xs={12} sm={6} md={6} lg={4}>
                <LinkContainer to={this.props.to}>
                    <Thumbnail className="tile">
                        <Row><Col xs={11}><Image src={this.props.src} alt="No image found" circle={this.props.circle} responsive className="center-block" /><hr /></Col></Row>
                        <Row><Col xs={11}>{this.props.content}</Col></Row>
                    </Thumbnail>
                </LinkContainer>
            </Col>
        )
    }
}