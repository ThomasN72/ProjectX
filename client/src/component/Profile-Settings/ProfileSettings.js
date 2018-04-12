import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import ProfileNav from "../../component/Nav";
import "./Form.css";
import { Link } from "react-router-dom";

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
                  <Input 
                    type="email"
                    id="exampleEmail"
                    placeholder="Your Email" 
                    onChange={this.props.inputHandler}
                    name='email' 
                    value={this.props.email} 
                  />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password" 
                    name="password"  
                    id="examplePassword" 
                    placeholder="Type Password" 
                    onChange={this.props.inputHandler}
                    value={this.props.password}
                  />
                </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="usersname">Name</Label>
                  <Input 
                    type="text" 
                    name="usersname"  
                    id="usersname" 
                    placeholder="Name" 
                    onChange={this.props.inputHandler}
                    value={this.props.usersname}
                  />
              </FormGroup>
            </Col>
          </Row>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input 
                type="text" 
                name="location"   
                id="location" 
                placeholder="location"
                onChange={this.props.inputHandler}
                value={this.props.locationn}  
              />
            </FormGroup>
          <Row>
            <Col>
              <FormGroup>
                <Label for="sat">SAT Score</Label>
                  <Input 
                    type="number" 
                    name="sat"  
                    id="sat" 
                    placeholder="SAT Score" 
                    onChange={this.props.inputHandler}
                    value={this.props.sat}
                  />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="act">ACT Score</Label>
                  <Input 
                    type="number"
                    name="act"  
                    id="act" 
                    placeholder="ACT Score" 
                    onChange={this.props.inputHandler}
                    value={this.props.act}
                  />
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
              <Button className="search-btn" onClick={this.props.buttonHandler}>Submit</Button>
					</Col> 
      </Form>
        )
    }
}

export default Profile;