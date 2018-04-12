import React, { Component } from "react";
import ProfileNav from "../../component/Nav";
import API from "../../utils/userAPI.js";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import InfoCard from "../../component/InfoCard";
import { UserInfo } from "../../component/UserInfo";

class UserProfile extends Component {
    state = {
        user : {}
    }

    loadUserData() {
        API.getUserData(this.props.match.params.email)
            .then(res => 
                this.setState({ user: res.data })
            )
            .catch(err => console.log(err))
    }

    componentDidMount(){
        console.log(this.props);
        this.loadUserData();
    }

    render() {
        return (
            <div className="container-fluid">
                <h1> User Profile </h1>                
            </div>

        )
    }
}

export default UserProfile;