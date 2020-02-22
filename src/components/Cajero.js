import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';


import Button from '@material-ui/core/Button'
export default class Cajero extends React.Component{
    render(){
        return(
            <BrowserRouter>
                        <div>
                            <Link to="/" >
                                <Button >Home</Button>    
                            </Link>

                            <Link to="/cajero" >
                                <Button >Cajero</Button>
                            </Link>

                            <Link to="/cocina" >
                                <Button >Cocina</Button>
                            </Link>
                        </div>
                        <p>Interfaz del cajero</p>
            </BrowserRouter>
        )
    } 
}