import React from "react";
import { Row, Col } from 'reactstrap';
import './Jumbotron.css';

const WelcomeJumbotron = props => (
    <div>
        <Row className="welcomejumbo">
            <Col >
                <h1 className="heading"> Welcome to OneApp!</h1>
                <p>Please fill out email, password, name and whatever other information you may like to provide.</p>
            </Col>
        </Row>
    </div>
);

export default WelcomeJumbotron;