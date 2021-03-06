import React from 'react';
import { Button, ButtonGroup, Input, InputLabel } from '@material-ui/core';
import '../css stylesheets/LoginComponent.css';
import firebase from '../firebase-config.js';
// Clasa pentru logarea userilor
class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            password: "",
            email: ""
        }

        this.handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

    }
    render() {
        // Definire componente vizuale
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

                <ButtonGroup>
                    <Button variant="contained" color="primary" onClick={() => {
                      
                        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then();
                       
                        this.state.email !== "" && this.state.password !== "" ?
                            this.props.history.push("/AddActivityCode") : alert("You must log in first!")
                    }}>
                        Log in
               </Button>

                    <Button variant="contained" color="primary" onClick={() => { this.props.history.push("/Register") }}>
                        Register
               </Button>
                </ButtonGroup>
            </form>

        );
    }
}
// Pentru a putea face clasa vizibila si in alte fisiere, pentru a putea fi utilizata in acestea
export default Login;