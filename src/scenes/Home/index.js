import React from 'react';
import { PageHeader, Col, Row, Image, Thumbnail } from 'react-bootstrap';
import './index.css';
import Tile from './../../components/Tile';
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <PageHeader>Software/DevOps Engineer</PageHeader>
                <Row className="show-grid row-no-padding flex-row">
                    <Tile src="/portrait.jpg" title="Jacob Armentrout (me!)" subtitle1="Software Engineer. I love creating solutions." subtitle2="Where there's a will, there's a way"/>
                    <Tile src="/wd.jpg" title="Western Digital (3yr)" subtitle1="Technician + Testing Engineer Internship" subtitle2="Hard drive testing + automation" href="https://www.wdc.com/" external/>
                    <Tile src="/hgst.png" title="HGST (summer)" subtitle1="Software Engineer Internship" subtitle2="SVN diff notifier" href="https://www.hgst.com/" external/>
                    <Tile src="/uci_cs.jpg" title="UCI CS (1yr)" subtitle1="Student Linux Administrator" subtitle2="Server maintenance + puppet development" href="https://www.ics.uci.edu/computing/index.php" external/>
                    <Tile src="/veeva.jpg" title="Veeva (1yr+, Working Here!)" subtitle1="Associate Software Engineer" subtitle2="Built DevOps python library, Jenkins automation in AWS, Ansible provisioning, etc." href="https://www.veeva.com/" external/>
                </Row>
                <PageHeader>Image Gallery About Me</PageHeader>
                <Row className="show-grid row-no-padding flex-row">
                    <Image src="/bamboo_forest_stream.jpg" alt="No image found" />
                    <Image src="/Bell.jpg" alt="No image found" />
                    <Image src="/big_ben.jpg" alt="No image found" />
                    <Image src="/boardgames.jpg" alt="No image found" />
                    <Image src="/makena_landing.jpg" alt="No image found" />
                    <Image src="/fallout4.jpg" alt="No image found" />
                    <Image src="/foosball.jpg" alt="No image found" />
                    <Image src="/Guinness.jpg" alt="No image found" />
                    <Image src="/jakes_tutorials.jpg" alt="No image found" />
                    <Image src="/kittens.jpg" alt="No image found" />
                    <Image src="/escape_room.jpeg" alt="No image found" />
                    <Image src="/munchkins.jpg" alt="No image found" />
                    <Image src="/ping_pong.jpg" alt="No image found" />
                    <Image src="/raspberry_pi.jpg" alt="No image found" />
                    <Image src="/skyrim.jpg" alt="No image found" />
                    <Image src="/Turtle.JPG" alt="No image found" />
                    <Image src="/uci.png" alt="No image found" />
                    <Image src="/xmas_tree.jpg" alt="No image found" />
                </Row>
                <br />
            </div>
        )
    }
}