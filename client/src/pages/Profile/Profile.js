import React, { Component } from "react";
import ProfileNav from "../../component/Nav";
import ProfileSettings from "../../component/Profile-Settings";
import WelcomeJumbotron from "../../component/WelcomeJumbotron";
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
        bio: "",
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
            .then(this.getCollegeData(this.state))
            .catch(err => console.log(err))
    }

    componentDidMount(){
        API.findOne();
    }


    getCollegeData() {
        console.log("======College data func ======");
        console.log(this.state);
        API.getCollegeData(this.state)
            .then(res => {
                console.log("Got something");
                console.log(res);
            })
    }



    render() {
        return (
            <div className="container-fluid">            
            { !this.state.submitted ? (
                    <Col classname="form-col">
                        <WelcomeJumbotron />
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
                                bio={this.state.bio}
                            />
                        </div>
                    </Col>
            ): (
                <div>
                <ProfileNav />
                
                <Row className="feed-row">
                
                    <Col className="feed" sm={{ size: 8, order: 0, offset: 0 }}>
                        <InfoCard />
                        <InfoCard />
                        <InfoCard />
                    </Col>
                    <Col className="userSideBar" sm={{ size: 3, order: 1, offset: 0 }}>
                        <h2>{this.state.usersname}</h2>
                        <Link className="userInfo" to={"/Profile/"+ this.state._id}>
                        <UserInfo 
                            usersname={this.state.usersname}
                            location={this.state.location}
                            id={this.state._id}
                        />
                        </Link>
                        <h2>Update Profile</h2>
                        <h2>Search Schools</h2>
                    </Col>
                </Row>
                </div> 
            ) }
            </div>

        )
    }
}

export default Profile;
