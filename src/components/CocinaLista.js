import React from "react";

import fire from "../config/config";
import "firebase/auth";

import SimpleTable from '../components/Table';
import Pedidos from '../components/Pedidos';

import {BrowserRouter, Link} from 'react-router-dom'



import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'



//PAGINAS:
//  Home.js
//      CLIENTES
//      IF(EMPLOYEE) = TRUE
//          CAJEROS (EDITOR) 
//          COCINERO (TABLE)
//          REPARTIDORES


export default class CocinaLista extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hola: "",
        }
    }

    render(){

        return(
            <div>
                <SimpleTable></SimpleTable>
                <Pedidos></Pedidos>
            </div>
            
        );
    }
}