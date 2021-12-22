import React from 'react';
import Login from '../session/Login';
import Logout from '../session/Logout';

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <Login/>
                <Logout/>
            </div>
        );
    }
}
