import React from "react";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";
import LogoutButon from "../login/LogoutButton";


export default class Workspace extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: ""}

        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(value){
        this.setState({text: value});
    }
    
    render() {
        const scrollStyle = {
            overflowY: "scroll",
            height: '95vh'
        }
        return (
            <div>
                <div className="container-fluid">
                    <br></br>
                    <div className="row">
                        <div className="col-md-1" >
                            <LogoutButon handleLogout = {this.props.handleLogout}/>
                        </div>
                        <div className="col-md-2" style={scrollStyle}>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>
                            <button>ir a la nota</button>

                        </div>
                        <div className="col-md-9" style={scrollStyle} >
                            <ReactQuill
                            theme="snow"
                            placeholder="Write something"
                            value={this.state.text}
                            onChange={this.handleTextChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}