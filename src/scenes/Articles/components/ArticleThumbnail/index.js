import React from 'react';
import { Col, Thumbnail } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class ArticleSnippet extends React.Component {
    render() {
        const logos = {
            'python' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2000px-Python.svg.png',
            'ansible': 'https://labs.consol.de/assets/images/ansible-logo.png',
            'redhat': 'https://cdn1.iconfinder.com/data/icons/nuove/128x128/apps/redhat.png'
        }
        return (
            <Col xs={6} sm={6} md={3} lg={3}>
                <LinkContainer to={this.props.dest}>
                    <Thumbnail src={logos[this.props.logo]} alt="No image found">
                        <h3>Title</h3>
                        <p>content</p>
                    </Thumbnail>
                </LinkContainer>
            </Col>
        )
    }
}