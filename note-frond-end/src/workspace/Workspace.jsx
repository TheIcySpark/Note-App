import React from "react";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";


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
        return (
             <div>
                 <h2>Text editor</h2>
                 <ReactQuill
                    theme="snow"
                    placeholder="Write something"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
             </div>
        );
    }
}