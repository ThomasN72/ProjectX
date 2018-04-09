import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ProfileNav from "../../component/Nav";
import "./Form.css";

class Profile extends Component {

    render() {
        return (
        <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Type Password" />
        </FormGroup>
        <FormGroup>
            <Label for="first-name">First Name</Label>
            <Input type="text" name="first-name" id="first-name" placeholder="First Name" />
        </FormGroup>
        <FormGroup>
            <Label for="last-name">Last Name</Label>
            <Input type="text" name="last-name" id="lasst-name" placeholder="Last Name" />
        </FormGroup>
        <FormGroup>
          <Label for="Education-Level">Education Level</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Middle School</option>
            <option>9th-10th Grade</option>
            <option>11th-12th Grade</option>
            <option>High School Diploma</option>
            <option>Some College</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Field of study</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>Accounting</option>
            <option>Biology</option>
            <option>Computer Science</option>
            <option>English</option>
            <option>Histor</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
          
      </Form>
        )
    }
}

export default Profile;