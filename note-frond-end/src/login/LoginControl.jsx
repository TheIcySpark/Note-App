import React from 'react';
import Workspace from '../workspace/Workspace';
import LoginButton from './LoginButton';
import LogoutButon from './LogoutButton';
import NotLoggedinClass from './NotLoggedinHome';

export default class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoggedin: false}

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }


    handleLogin(){
        this.setState({isLoggedin: true});
    }

    handleLogout(){
        this.setState({isLoggedin: false});
    }

    render(){
        if(this.state.isLoggedin){
            return(
                <div>
                    <LogoutButon handleLogout = {this.handleLogout}/>
                    <Workspace></Workspace>
                </div>
            );
        }else{
            return(
                <div>
                    <LoginButton handleLogin = {this.handleLogin} />
                    <NotLoggedinClass></NotLoggedinClass>
                </div>
            );
        }
    }
}
