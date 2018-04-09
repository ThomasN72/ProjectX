import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import ProfileNav from "../../component/Nav";
import "./Form.css";

class Profile extends Component {

  constructor(props){
    super(props);
  }
    render() {
        return (
        <Form>
          <Row>
            <Col>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" value={this.props.email} id="exampleEmail" placeholder="Your Email" />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" value={this.props.password} id="examplePassword" placeholder="Type Password" />
                </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="name">Name</Label>
                  <Input type="text" name="name" value={this.props.name} id="name" placeholder="Name" />
              </FormGroup>
            </Col>
          </Row>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input type="text" name="location" value={this.props.location} id="location" placeholder="location" />
            </FormGroup>
          <Row>
            <Col>
              <FormGroup>
                <Label for="sat">SAT Score</Label>
                  <Input type="number" name="sat" value={this.props.sat} id="sat" placeholder="SAT Score" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="act">ACT Score</Label>
                  <Input type="number" name="act" value={this.props.act} id="act" placeholder="ACT Score" />
              </FormGroup>
            </Col>
          </Row>
            
            
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
         <Col className='col-search-btn' md='2' xs='3'>
						<Button className="search-btn" onClick={this.props.buttonHandler}>Search</Button>
					</Col> 
      </Form>
        )
    }
}

export default Profile;