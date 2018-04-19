import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import "./SignUpBtn.css";

const SignUpBtn = props => {
    return (
        <div>
            <Button className="sigup-style"><Link to="/Profile">Sign Up</Link></Button>
        </div> 
    )
}

export default SignUpBtn;