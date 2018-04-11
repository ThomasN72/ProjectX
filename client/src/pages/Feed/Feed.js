import React, { Component } from "react";
import ProfileNav from "../../component/Nav";
import "./Feed.css"
import API from "../../utils/userAPI.js";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

class Feed extends Component {
    state = {
        colleges: [],
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
        axios.post(`/api/users`, { user })
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
                
            </div>

        )
    }
}

export default Profile;