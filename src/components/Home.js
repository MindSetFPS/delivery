import React from "react";

import SimpleTable from '../components/Table';
import Editor from '../components/Editor';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';


export default class Home extends React.Component{
    constructor(props){
        super(props);
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
                <SimpleTable></SimpleTable>


                <BottomNavigation style={stickBottom}>
                    <BottomNavigationAction label="Recents" icon={<FavoriteIcon/>}/> 
                    <BottomNavigationAction icon={<RestoreIcon/>}/>
                    <BottomNavigationAction icon={<LocationOnIcon/>}/>
                </BottomNavigation>
            </div>

        );
    }
}