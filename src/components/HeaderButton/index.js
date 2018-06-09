import React from 'react';
import { Button } from 'react-bootstrap';

export default class HeaderButton extends React.Component {
    render() {
        var s = {
            marginTop: '6px'
        };
        return (
            <a href="https://drive.google.com/open?id=1PsbKRdrLexjXNc-vxKmG3InV8g11oAgd" target="_blank" rel="noopener noreferrer">
                <Button style={s} bsStyle={this.props.bsStyle}>{this.props.text}</Button>
            </a>
        )
    }
}
