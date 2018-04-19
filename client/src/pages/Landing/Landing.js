import React, {Component} from "react";
import SignUpBtn from '../../component/SignUpBtn/SignUpBtn.js'
import Background from "../../component/Background/Background.js"
import LearnMore from "../../component/LearnMore/LearnMore.js"
import imgFile from "../../static/FrontPageTwo.jpg"
import logoFile from "../../static/whiteLogo.png"
import './Landing.css';
import { Container, Row, Col } from 'reactstrap';
import HomeNav from "../../component/HomeNav";

import '../../static/FrontPage.jpg'

class Landing extends Component {
    state = {
    };

      render (){
        return (
            <div>
                <HomeNav />
                <div className="landing-background-image">
                <div className="color">
                   
                    <img className="logo" src={logoFile}/>
                    <SignUpBtn/>
                    </div>
                </div>
                <br/>
                <div>
                    <Container>
                        <Row>
                            <Col className="image-style">
                                <img className="image-style" src={imgFile}/>
                            </Col>

                            <Col>
                                <LearnMore/>
                            </Col>
                        </Row>
                    </Container>
                
                </div>
            </div>
        )
    }
}

export default Landing;