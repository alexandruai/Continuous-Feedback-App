import React from 'react';
import {Button,ButtonGroup,Input,InputLabel} from '@material-ui/core';
import '../css stylesheets/LoginComponent.css';
class Login extends React.Component {
    render() {
        return (
            <div id="login">
                <h4>Welcome to the Continuous Feedback App</h4>   
                <InputLabel>Email</InputLabel>            
                <Input
                type="email">
                </Input>
                <InputLabel>Password</InputLabel>
                <Input
                type="password">
                </Input>

                <ButtonGroup>
               <Button variant="contained" color="primary">
                Log in
               </Button>
               
               <Button variant="contained" color="primary">
                Register
               </Button>
               </ButtonGroup>
            </div>

        );
    }
}

export default Login;