import React, {Component} from "react";
import SignUp from '../../component/SignUp/SignUp.js'
import LogIn from '../../component/LogIn/LogIn.js'
import Background from "../../component/Background/Background.js"
import './Landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import '../../assets/FrontPage.jpg'

class Landing extends Component {
    state = {

    };
    render (){
        return (
            <div>
                <div className="landing-background-image">
                    <Col className="buttons-style" sm={{ size: 'auto', offset: 5 }}>
                        <Row>
                            <SignUp/>
                            <LogIn property="LogIn"/>
                        </Row>
                    </Col>
                </div>
                <div>
                    <Container>
                        <Row>
                        <img source={require("../../assets/FrontPageTwo.jpg")}/>
                        <p>Learn More!</p>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Landing;