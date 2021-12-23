import React from "react";
import GoogleLogin from "react-google-login";

export default class LoginButton extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    onLoginSuccess(){
        console.log('LoginButton');
        this.props.handleLogin();
    }

    
    onLoginFailure = (error) =>{
        console.log('Login Failure: ', error);
    }
    

    render(){
        return(
            <GoogleLogin
                clientId="149011605987-vv0vmgme5uraqqe1722fckafj8ttu9v2.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.onLoginSuccess}
                onFailure={this.onLoginFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        );
    }
}
