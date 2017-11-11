import React from 'react';
import { PageHeader } from 'react-bootstrap';
import PDFViewer from '../../components/PDFViewer';


export default class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <PageHeader>Portfolio</PageHeader>
                <PDFViewer fileName="JacobArmentroutResume.pdf" />
            </div>
        )
    }
}