import React, {Component} from "react";
import SignUpBtn from '../../component/SignUpBtn/SignUpBtn.js'
import Background from "../../component/Background/Background.js"
import LearnMore from "../../component/LearnMore/LearnMore.js"
import imgFile from "../../static/FrontPageTwo.jpg"
import './Landing.css';
import { Container, Row, Col } from 'reactstrap';

import '../../static/FrontPage.jpg'

class Landing extends Component {
    state = {
    };

      render (){
        return (
            <div>
                <div className="landing-background-image">
                    <Col className="buttons-style" sm={{ size: 'auto', offset: 5 }}>
                        <Row>
                            <SignUpBtn/>
                        </Row>
                    </Col>
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