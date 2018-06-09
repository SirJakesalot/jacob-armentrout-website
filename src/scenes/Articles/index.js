import React from 'react';
import { PageHeader, Row } from 'react-bootstrap';
import Tile from './../../components/Tile';

const logos = {
    'python' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2000px-Python.svg.png',
    'ansible': 'https://labs.consol.de/assets/images/ansible-logo.png',
    'redhat': 'https://cdn1.iconfinder.com/data/icons/nuove/128x128/apps/redhat.png',
    'desk': '/StandingDesk.png',
    'portrait': '/portrait.jpg'
}

export default class Articles extends React.Component {
    render() {
        return (
            <div>
                <PageHeader>Articles</PageHeader>
                <Row className="show-grid row-no-padding flex-row">
                    <Tile src={logos['ansible']} to="/ansible-hello-world" title="Hello World" subtitle1="subtitle1" internal/>
                    <Tile src={logos['ansible']} to="/ansible-hello-world" title="Hello World" subtitle1="subtitle1" internal/>
                    <Tile src={logos['ansible']} to="/ansible-hello-world" title="Hello World" subtitle1="subtitle1" internal/>
                    <Tile src={logos['ansible']} to="/ansible-hello-world" title="Hello World" subtitle1="subtitle1" internal/>
                    <Tile src={logos['redhat']} to="/ansible-hello-world" title="Hello World" subtitle1="subtitle1" internal/>
                    <Tile src={logos['redhat']} to="/ansible-hello-world" title="Hello World" subtitle1="subtitle1" internal/>
                    <Tile src={logos['redhat']} to="/ansible-hello-world" title="Hello World" subtitle1="subtitle1" internal/>
                    <Tile src={logos['python']} to="/ansible-hello-world" title="Hello World" subtitle1="subtitle1" subtitle2="really really really really really long subtitile2" internal/>
                    <Tile src={logos['python']} to="/ansible-hello-world" title="Hello World" subtitle1="subtitle1" internal/>
                    <Tile src={logos['python']} to="/ansible-hello-world" title="Hello World" subtitle1="subtitle1" internal/>
                    <Tile src={logos['python']} to="/ansible-hello-world" title="Hello World" subtitle1="subtitle1" internal/>
                </Row>
            </div>
        )
    }
}