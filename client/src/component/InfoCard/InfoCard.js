import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import "./InfoCard.css";

// GameListItem renders Boxart from game 
const InfoCard = props => (
    <div className="card">
        <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>{props.city}{props.state}</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
        </Card>
    </div>
    

);

export default InfoCard;
