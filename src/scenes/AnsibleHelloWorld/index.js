import React from 'react';
import { PageHeader, Row, Col } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';
// import GistEmbed from 'react-gist-embed';
import GistEmbed from './../../components/react-gist-embed'

import './index.css';


let codeString = `import cv2
import numpy as np
from matplotlib import pyplot as plt

img = cv2.imread('watch.jpg',cv2.IMREAD_GRAYSCALE) # this is a really long line
cv2.imshow('image',img)
cv2.waitKey(0)
cv2.destroyAllWindows()`;

let ymlString = `[atlanta]
host1
host2

[atlanta:vars]
ntp_server=ntp.atlanta.example.com
proxy=proxy.atlanta.example.com`;

export default class AnsibleHelloWorld extends React.Component {
    componentDidMount() {
        window.location.reload();
    }
    render() {
        this.setState(this.state);
        return (
            <div>
                <PageHeader>Ansible Hello World</PageHeader>
                <div>
                    <GistEmbed gistId='0f89e01cfab7478c97f1a4e15cb6ebd0.js' />
                </div>
            </div>
        )
    }
}