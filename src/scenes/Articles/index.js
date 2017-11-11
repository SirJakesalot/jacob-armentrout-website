import React from 'react';
import { PageHeader, Row } from 'react-bootstrap';
import ArticleThumbnail from './components/ArticleThumbnail';

export default class Articles extends React.Component {
    render() {
        return (
            <div>
                <PageHeader>Articles</PageHeader>
                <Row>
                    <ArticleThumbnail logo="python" dest="/JacobArmentroutResume.pdf" />
                    <ArticleThumbnail logo="ansible" dest="/test" />
                    <ArticleThumbnail logo="redhat" dest="/test" />
                    <ArticleThumbnail logo="python" dest="/test" />
                    <ArticleThumbnail logo="python" dest="/test" />
                    <ArticleThumbnail logo="redhat" dest="/test" />
                    <ArticleThumbnail logo="redhat" dest="/test" />
                    <ArticleThumbnail logo="ansible" dest="/test" />
                    <ArticleThumbnail logo="ansible" dest="/test" />
                </Row>
            </div>
        )
    }
}