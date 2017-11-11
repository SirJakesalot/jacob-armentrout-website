import React from 'react';
import { PageHeader, Panel} from 'react-bootstrap';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <PageHeader>DevOps Engineer and Software Developer</PageHeader>
                <Panel header="head">
                    <p>hey</p>
                </Panel>
            </div>
        )
    }
}