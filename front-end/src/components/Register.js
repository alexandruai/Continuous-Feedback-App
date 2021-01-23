import React from 'react';
import firebase from '../firebase-config.js';
import { Button, ButtonGroup, Input, InputLabel } from '@material-ui/core';
import '../css stylesheets/LoginComponent.css';
import { post } from '../Calls';
import {userRoute} from '../ApiRoutes';
import axios from 'axios';
class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            User: {
                password: '',
                email: ''
            }
        }
        this.handleChange = (e) => {
            let newUser = this.state.User;        
            newUser[e.target.name] = e.target.value;
            this.setState({User: newUser});
        }
        this.register = async () => {
            
            firebase.auth().createUserWithEmailAndPassword(this.state.User.email, this.state.User.password).then();
            const newUser = {
                Email: this.state.User.email,
                Password: this.state.User.password,
                RolId:1
            }
           
           axios.post('http://localhost:8080/api/createUser/1',newUser).then();
         
            this.props.history.push("/");


        }

    }

    render() {
        return (

            <form id="login">
                <h4>Welcome to the Continuous Feedback App</h4>
                <InputLabel>Email</InputLabel>
                <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}>
                </Input>
                <InputLabel>Password</InputLabel>
                <Input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}>
                </Input>
                <Button variant="contained" color="primary" onClick={this.register}>
                    Register
           </Button>

            </form>


        );



    }
}
export default Register;