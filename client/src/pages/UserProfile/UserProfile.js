import React, { Component } from "react";
import ProfileNav from "../../component/Nav";
import API from "../../utils/userAPI.js";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import InfoCard from "../../component/InfoCard";
import { UserInfo } from "../../component/UserInfo";
import "./UserProfile.css";

class UserProfile extends Component {
    state = {
        user : {}
    }

    loadUserData() {
        API.getUserData(this.props.match.params.id)
            // .then(res => console.log(res.data))
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err))
    }

    componentDidMount(){
        console.log(this.props);
        this.loadUserData();
    }

    render() {
        return (
            <div className="container-fluid">
                <ProfileNav /> 
                <div className="userInfo">
                    <Row>
                        <Col className="prof-col">
                            <h1> {this.state.user.usersname} </h1> 
                        </Col>
                    </Row>
                    <Row>
                        <Col className="prof-col">
                            <h4> {this.state.user.location} </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="prof-col">
                            <h4> {this.state.user.bio} </h4>
                        </Col>
                    </Row>
                </div>
            </div>

        )
    }
}

export default UserProfile;