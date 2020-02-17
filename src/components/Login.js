import React from 'react';

import fire from "../config/config";
import "firebase/firestore";
import "firebase/auth";
import { render } from '@testing-library/react';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: "",
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


    render(){
        return(
            <div >Hola chabos</div>
            
        );
    }
}

