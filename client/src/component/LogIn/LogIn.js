import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    state = {
        username:"",
        password:"",
    }
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: state
        })
    }
    toggle() {
        event.preventDefault();
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>Login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <form>
                            Username:
                            <input 
                            value={this.state.username}
                            type="text" 
                            onChange={this.handleInputChange}
                            name="username" 
                            placeholder="username"/>
                            <br/>
                            Password:
                            <input 
                            value={this.state.password}
                            type="text" 
                            onChange={this.handleInputChange}
                            name="password" 
                            placeholder="password"/>
                        </form> 
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Submit</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default LogIn;
