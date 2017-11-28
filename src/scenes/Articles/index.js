import React from 'react';
import { PageHeader, Row } from 'react-bootstrap';

import ArticleThumbnail from './components/ArticleThumbnail';

export default class Articles extends React.Component {
    render() {
        return (
            <div>
                <PageHeader>Articles</PageHeader>
                <Row>
                    <ArticleThumbnail logo="ansible" dest="/ansible-hello-world" title="Hello World" subtitle="subtitle"/>
                    <ArticleThumbnail logo="ansible" dest="/test" title="title" subtitle="subtitle"/>
                    <ArticleThumbnail logo="ansible" dest="/test" title="title" subtitle="subtitle"/>
                    <ArticleThumbnail logo="ansible" dest="/test" title="title" subtitle="subtitle"/>
                    <ArticleThumbnail logo="redhat" dest="/test" title="title" subtitle="subtitle"/>
                    <ArticleThumbnail logo="redhat" dest="/test" title="title" subtitle="subtitle"/>
                    <ArticleThumbnail logo="redhat" dest="/test" title="title" subtitle="subtitle"/>
                    <ArticleThumbnail logo="python" dest="/test" title="title" subtitle="subtitle"/>
                    <ArticleThumbnail logo="python" dest="/test" title="title" subtitle="subtitle"/>
                </Row>
            </div>
        )
    }
}