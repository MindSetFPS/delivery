import React from 'react';

import "../App.css";

import fire from "../config/config";
import "firebase/firestore";
import "firebase/auth";
import { render } from '@testing-library/react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box';

export default class Login extends React.Component{
    constructor(props){
        super(props);

        this.handleEmailAndPassword = this.handleEmailAndPassword.bind(this);
        this.registerNewUser = this.registerNewUser.bind(this);
        this.logInUser = this.logInUser.bind(this);

        this.state = {
            email: "",
            password: "" 
        }

    }

    authListener(){
        fire.auth().onAuthStateChanged((user) =>{
            if(user){
                var user = user.uid;
                this.setState({user})
            }
        })
    }

    handleEmailAndPassword(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e);
    }

    registerNewUser(){
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error){
            var errorCode = error.code;
            console.log(errorCode);

        })
        .then(
            console.log("Usuario Registrado")
        )
        console.log("Chinga tu madre AMLO");

    }

    logInUser(){
        console.log("Vete a la verga amlo")
    }

    render(){
        return(                
            <div className="aymipichula" >
                <form>
                <h1>Welcome</h1>
                <Box m={1}>
                    <TextField name="email"  placeholder="Correo Electronico" value={this.state.email} onChange={this.handleEmailAndPassword} type="email"></TextField>
                </Box>
                <Box m={1} >
                    <TextField name="password"  placeholder="Contrasena" value={this.state.password} onChange={this.handleEmailAndPassword} type="password" ></TextField>
                </Box>

                <Box display="flex" justifyContent="center">
                    <Box m={1} >
                        <Button variant="contained" color="primary" onClick={this.logInUser}>Iniciar Sesion</Button>
                    </Box>
                    <Box m={1} >
                        <Button variant="contained" color="secondary" onClick={this.registerNewUser} >Registrarse</Button>
                    </Box>
                </Box>


                

                </form>

            </div>
            
    
            
        );
    }
}

