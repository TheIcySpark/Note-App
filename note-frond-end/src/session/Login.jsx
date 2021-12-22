import React from "react";
import GoogleLogin from "react-google-login";

export default class Login extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    
    onLoginSucces = (googleResponse) =>{
        console.log('Login succes: ', googleResponse.profileObj);
    }

    onLoginFailure = (googleResponse) =>{
        console.log('Login Failure: ', googleResponse);
    }
    

    render(){
        return(
            <GoogleLogin
                clientId="149011605987-vv0vmgme5uraqqe1722fckafj8ttu9v2.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.onLoginSucces}
                onFailure={this.onLoginFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        );
    }
}
