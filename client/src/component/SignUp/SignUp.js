import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

const SignUp = props => {
    return (
        <div>
            <Button className="sigup-style"><Link to="/profile">Sign Up</Link></Button>
        </div>
    )
}

export default SignUp;