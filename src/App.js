import React, { Component } from 'react';
import './App.css';

import fire from "./config/config";
import "firebase/auth";

import Home from "./components/Home";
import Login from "./components/Login";

import {BrowserRouter, Route, Switch, Link, Router} from 'react-router-dom';
import {withRouter} from 'react-router';


import Box from '@material-ui/core/Box'

import Cajero from "./components/Cajero";
import CocinaLista from "./components/CocinaLista";
import AccesosDirectos from './components/AccesosDirectos';
import MenuLista from './components/MenuLista';
import { Button } from '@material-ui/core';

//PAGINAS:
//    HOME.JS
//      CLIENTES (PEDIR COMIDA)
//      IF(EMPLOYEE) == TRUE{
//        CAJEROS (EDITOR)
//        COCINERO (TABLE)
//        REPARTIDORES
//        }
export default class App extends Component{

  constructor(props){
    super(props);
    this.authListener = this.authListener.bind(this);

    this.state = {
        user: null,
    }
  }

  componentDidMount(){
    this.authListener();
  }
  
  authListener(){

    //Esta funcion escucha cuando inicias o cierras sesion
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        var user = user.uid;
        console.log(user)
        this.setState({user})
        console.log("Sesion iniciada")
      } else{
        console.log("Sesion NO iniciada")
      }
    })
  }

  
  render(){
    return ( 
      <div className="App" >
        {this.state.user ? (<Home userId={this.state.user} ></Home>):(<Login></Login>) }
      </div>

      

    );
  }

};

