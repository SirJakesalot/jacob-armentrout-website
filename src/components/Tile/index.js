import React from 'react';
import { Col, Thumbnail } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './index.css';

export default class Tile extends React.Component {
    render() {
        var thumnail = (
            <Thumbnail src={this.props.src} className="tile">
                <hr/>
                <h3>{this.props.title}</h3>
                <h4>{this.props.subtitle1}</h4>
                <h4>{this.props.subtitle2}</h4>
            </Thumbnail>
        )

        if (this.props.internal) {
            return (
                <Col xs={12} sm={6} md={6} lg={4}>
                    <LinkContainer to={this.props.to}>
                        {thumnail}
                    </LinkContainer>
                </Col>
            )
        } else if (this.props.external) {
            return (
                <Col xs={12} sm={6} md={6} lg={4}>
                    <a href={this.props.href} target="_blank" rel="noopener noreferrer">
                        {thumnail}
                    </a>
                </Col>
            )
        }
        return (
            <Col xs={12} sm={6} md={6} lg={4}>
                {thumnail}
            </Col>
        )
    }
}

Tile.defaultProps = {
    href: "#"
}