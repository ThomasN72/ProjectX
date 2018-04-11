import React, { Component } from "react";
import ProfileNav from "../../component/Nav";
import ProfileSettings from "../../component/Profile-Settings";
import "./profile.css";
import API from "../../utils/userAPI.js";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

class Profile extends Component {
    state = {
        usersname: "",
        email: "",
        password: "",
        location: "",
        act: "",
        sat: "",
        gpa: ""
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
        let user = this.state;
        console.log("USER");
        console.log(user);
        API.createUser(  user )
            .then(res => {
                console.log(res.data);
                this.setState(res.data);
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div >
                <ProfileNav />
                <h1>Proflie</h1>
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
            </div>

        )
    }
}

export default Profile;
