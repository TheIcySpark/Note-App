import React from 'react';
import LoginButton from './LoginButton';
import LogoutButon from './LogoutButton';

export default class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoggedIn: false}

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }


    handleLogin(){
        console.log('handleLogin');
        this.setState({isLoggedIn: true});
    }

    handleLogout(){
        this.setState({isLoggedIn: false});
    }

    render(){
        if(this.state.isLoggedIn){
            return(
                <LogoutButon handleLogout = {this.handleLogin}/>
            );
        }else{
            return(
                <LoginButton handleLogin = {this.handleLogout} />
            );
        }
    }
}
