import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

class UserInfo extends Component {

  constructor(props){
    super(props);
  }
    render() {
        return (
            <div>
                <h3>{this.props.usersname}</h3>
            </div>
        )
    }
}

export default UserInfo;