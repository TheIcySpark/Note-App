import React from "react";
import GoogleLogin from "react-google-login";

export default class LoginButton extends React.Component{
    
    onLoginFailure = (error) =>{
        console.log('Login Failure: ', error);
    }
    

    render(){
        return(
            <GoogleLogin
                clientId="149011605987-vv0vmgme5uraqqe1722fckafj8ttu9v2.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.props.handleLogin}
                onFailure={this.onLoginFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        );
    }
}
