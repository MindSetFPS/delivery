import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import fire from "./config/config";
import "firebase/auth";

import Home from "./components/Home";
import Login from "./components/Login";
import { render } from '@testing-library/react';


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
      <div className="App">
        {this.state.user ? (<Home></Home>) : (<Login></Login>) }
      </div>
    );
  }

};

