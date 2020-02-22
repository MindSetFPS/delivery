import React from "react";

import fire from "../config/config";
import "firebase/auth";

import {Link, BrowserRouter, Route} from 'react-router-dom';


import Box from '@material-ui/core/Box'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestoreIcon from '@material-ui/icons/Restore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


//PAGINAS:
//  Home.js
//      CLIENTES
//      IF(EMPLOYEE) = TRUE
//          CAJEROS (EDITOR)
//          COCINERO (TABLE)
//          REPARTIDORES


export default class AccesosDirectos extends React.Component{
    constructor(props){
        super(props);
        this.logOut = this.logOut.bind(this);
        this.state = {
        }
    }



    logOut(){
        console.log("Cerrando Sesion")
        fire.auth().signOut();
    }

    render(){

        const stickBottom = {
            position: "absolute",
            width: "100%",
            bottom: "0px"
        }

        return(
                <BottomNavigation style={stickBottom}>
                        <div>
                            <Link to="/" >
                                <BottomNavigationAction icon={<HomeIcon/>}/>
                            </Link>

                            <Link to="/cajero" >
                                <BottomNavigationAction icon={<FavoriteIcon/>}/> 
                            </Link>

                            <Link to="/cocina" >
                                <BottomNavigationAction icon={<RestoreIcon/>}/>
                            </Link>
                        
                            <BottomNavigationAction icon={<ExitToAppIcon/>} onClick={this.logOut}/>                        
                        </div>
                </BottomNavigation>


        );
    }
}