import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import HeaderButton from '../../components/HeaderButton';

import './index.css';


export default class Header extends React.Component {
    render() {
        return (
            <Navbar fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>Jacob Armentrout</Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/home">
                            <NavItem eventKey={1}>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/portfolio">
                            <NavItem eventKey={2}>Portfolio</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/articles">
                            <NavItem eventKey={3}>Articles</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <HeaderButton text="Resume" style="success"/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}