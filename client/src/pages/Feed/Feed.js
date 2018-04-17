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

    componentDidMount(){
        this.loadUserData();
    }

    loadUserData() {
        API.GetUser(this.props.match.params.id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    
    render() {
        return ( 
        <div>
        
        </div> 

        )
    }
}

export default Feed;