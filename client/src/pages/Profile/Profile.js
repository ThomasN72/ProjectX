import React, { Component } from "react";
import ProfileNav from "../../component/Nav";
import ProfileSettings from "../../component/Profile-Settings";
import "./profile.css";
import API from "../../utils/userAPI.js";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import InfoCard from "../../component/InfoCard";
import { UserInfo } from "../../component/UserInfo";
import { Link } from "react-router-dom";

class Profile extends Component {
    state = {
        usersname: "",
        email: "",
        password: "",
        location: "",
        act: "",
        sat: "",
        gpa: "",
        submitted: false,
    }

    handleInputChange = event => {
        console.log("Input change");
        console.log(event.target);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.state.submitted = true;
        let user = this.state;
        console.log("USER");
        console.log(user);

        API.createUser( user )
            .then(res => {
                console.log(res.data);
                this.setState(res.data);
            })
            .catch(err => console.log(err))
    }

    componentDidMount(){
        // API.findAll();
        API.findOne();
    }
    render() {
        return (
            <div className="container-fluid">
            
            { !this.state.submitted ? (
                    <Col>
                        <div className="form">
                            <ProfileSettings
                                inputHandler={this.handleInputChange}
                                buttonHandler={this.handleFormSubmit}
                                usersname={this.state.usersname}
                                email={this.state.email}
                                password={this.state.password}
                                location={this.state.location}
                                act={this.state.act}
                                sat={this.state.sat}
                                gpa={this.state.gpa}
                            />
                        </div>
                    </Col>
            ): (
                <div>
                <ProfileNav />
                <h1>{this.state.usersname}</h1>
                <Row className="feed-row">
                    <Col className="feed" sm={{ size: 8, order: 0, offset: 0 }}>
                        <InfoCard />
                        <InfoCard />
                        <InfoCard />
                    </Col>
                    <Col className="userSideBar" sm={{ size: 3, order: 1, offset: 0 }}>
                        <Link to={"/Profile/"+ this.state._id}>
                        <UserInfo 
                            usersname={this.state.usersname}
                            location={this.state.location}
                            id={this.state._id}
                        />
                        </Link>
                    </Col>
                </Row>
                </div> 
            ) }
             
                
                
                
            </div>

        )
    }
}

export default Profile;
