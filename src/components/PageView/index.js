import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class PageView extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={1} md={1} lg={1}></Col>
                    <Col xs={12} md={10} lg={10}>{this.props.children}</Col>
                    <Col xs={1} md={1} lg={1}></Col>
                </Row>
            </Grid>
        )
    }
}