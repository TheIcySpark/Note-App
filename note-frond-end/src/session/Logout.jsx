import React from "react";
import {GoogleLogout} from "react-google-login";

export default class Logout extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    onLogoutSucces(){
        console.log('Logout Succes');
    }

    onLogoutFailure = (error) =>{
        console.log(error);
    }

    render(){
        return(
            <GoogleLogout
                clientId="149011605987-vv0vmgme5uraqqe1722fckafj8ttu9v2.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={this.onLogoutSucces}
                onFailure={this.onLogoutFailure}
            />
        );
    }
}