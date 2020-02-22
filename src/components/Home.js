import React from "react";

import fire from "../config/config";
import "firebase/auth";

import {Link, BrowserRouter, Route, Switch, withRouter, Router} from 'react-router-dom';

import Box from '@material-ui/core/Box'

import Cajero from "./Cajero";
import CocinaLista from "./CocinaLista";
import AccesosDirectos from './AccesosDirectos';
import MenuLista from './MenuLista';

//PAGINAS:
//  Home.js
//      CLIENTES
//      IF(EMPLOYEE) = TRUE
//          CAJEROS (EDITOR)
//          COCINERO (TABLE)
//          REPARTIDORES


export default class Home extends React.Component{
    constructor(props){
        super(props);
        //this.logOut = this.logOut.bind(this);
        this.state = {
            hola: "",
        }
    }

    render(){

        const stickBottom = {
            position: "absolute",
            width: "100%",
            bottom: "0px"
        }

        return(

            <div>
                <BrowserRouter>
                    <div className="App">
                        <Switch>
                            <Route path="/" exact component={MenuLista} />
                            <Route path="/cajero"  component={Cajero} />
                            <Route path="/cocina"  component={CocinaLista} />    
                        </Switch>
                    </div>
                    <AccesosDirectos></AccesosDirectos>
                </BrowserRouter>
            </div>
 

        
        );
    }
}