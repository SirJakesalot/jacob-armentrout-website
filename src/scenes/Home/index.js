import React from 'react';
import { PageHeader, Row, Image } from 'react-bootstrap';
import './index.css';
import Tile from './../../components/Tile';
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <PageHeader>Software/DevOps Engineer</PageHeader>
                <Row className="show-grid row-no-padding flex-row">
                    <Tile src="https://github.com/SirJakesalot/jacob-armentrout-website/blob/master/public/portrait.jpg" title="Jacob Armentrout (me!)" subtitle1="Software Engineer. I love creating solutions." subtitle2="Where there's a will, there's a way"/>
                    <Tile src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/wd.jpg" title="Western Digital (3yr)" subtitle1="Technician + Testing Engineer Internship" subtitle2="Hard drive testing + automation" href="https://www.wdc.com/" external/>
                    <Tile src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/hgst.png" title="HGST (summer)" subtitle1="Software Engineer Internship" subtitle2="SVN diff notifier" href="https://www.hgst.com/" external/>
                    <Tile src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/uci_cs.jpg" title="UCI CS (1yr)" subtitle1="Student Linux Administrator" subtitle2="Server maintenance + puppet development" href="https://www.ics.uci.edu/computing/index.php" external/>
                    <Tile src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/veeva.jpg" title="Veeva (1yr+, Working Here!)" subtitle1="Associate Software Engineer" subtitle2="Built DevOps python library, Jenkins automation in AWS, Ansible provisioning, etc." href="https://www.veeva.com/" external/>
                </Row>
                <PageHeader>Image Gallery About Me</PageHeader>
                <Row className="show-grid row-no-padding flex-row">
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/bamboo_forest_stream.jpg" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/bell.jpg" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/big_ben.jpg" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/boardgames.jpg" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/makena_landing.jpg" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/fallout4.jpg" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/foosball.jpg" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/guinness.jpg" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/jakes_tutorials.jpg" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/kittens.jpg" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/escape_room.jpeg" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/munchkins.jpg" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/ping_pong.jpg" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/raspberry_pi.jpg" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/skyrim.jpg" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/turtle.jpg" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/uci.png" alt="No image found" />
                    <Image src="https://raw.githubusercontent.com/SirJakesalot/jacob-armentrout-website/master/public/xmas_tree.jpg" alt="No image found" />
                </Row>
                <br />
            </div>
        )
    }
}
