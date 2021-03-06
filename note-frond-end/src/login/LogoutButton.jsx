import React from "react";
import {GoogleLogout} from "react-google-login";

export default class LogoutButon extends React.Component{
    
    onLogoutFailure = (error) =>{
        console.log(error);
    }


    render(){
        return(
            <GoogleLogout
                clientId="149011605987-vv0vmgme5uraqqe1722fckafj8ttu9v2.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={this.props.handleLogout}
                onFailure={this.onLogoutFailure}
            />
        );
    }
}