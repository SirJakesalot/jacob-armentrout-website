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
export default class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <PageHeader>Portfolio</PageHeader>
                <Row className="show-grid row-no-padding flex-row">
                    <Tile src={logos['python']} href="https://github.com/SirJakesalot/seleniumgoogleimagescraper" title="Selenium Google Image Scraper" subtitle1="Performs multiple Google image searches and scrapes images. I needed the browser to execute javascript to load all the images." subtitle2="I used this to build an image database for a machine learning project." external/>
                </Row>
            </div>
        )
    }
}