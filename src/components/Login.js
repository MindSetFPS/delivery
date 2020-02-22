import React from 'react';

import "../App.css";

import fire from "../config/config";
import "firebase/firestore";
import "firebase/auth";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';

export default class Login extends React.Component{
    constructor(props){
        super(props);

        this.handleEmailAndPassword = this.handleEmailAndPassword.bind(this);
        this.registerNewUser = this.registerNewUser.bind(this);
        this.logInUser = this.logInUser.bind(this);

        this.state = {
            email: "",
            password: "",
            name: "",
            place: ""
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
    }

    registerNewUser(){
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error){
            var errorCode = error.code;
            console.log(errorCode);

        })
        .then(
            console.log("Usuario Registrado"),

            fire.firestore().collection("users").doc().set({
                email: this.state.email,
                name: this.state.name,
                place: this.state.place
            })

            
        )


        
    }

    logInUser(){
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(function(error){
            var errorCode = error.code;
            console.log(errorCode);
        })
        console.log("Iniciando Sesion...")
    }

    render(){
        return(                
            <Container >
                <h1>Welcome</h1>

                <form  >
                    <Box   justifyContent="center" >
                        <Box  >
                            <TextField name="name"  placeholder="Nombre" value={this.state.name} onChange={this.handleEmailAndPassword} type="text" ></TextField>
                         </Box>
                        <Box >
                            <TextField name="place"  placeholder="Direccion / Lugar" value={this.state.place} onChange={this.handleEmailAndPassword} type="text" ></TextField>
                        </Box>
                        <Box >
                            <TextField name="email"  placeholder="Correo Electronico" value={this.state.email} onChange={this.handleEmailAndPassword} type="email"></TextField>
                        </Box>
                        <Box  >
                            <TextField name="password"  placeholder="Contrasena" value={this.state.password} onChange={this.handleEmailAndPassword} type="password" ></TextField>
                        </Box>
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

            </Container>
            
    
            
        );
    }
}

