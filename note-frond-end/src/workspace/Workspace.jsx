import React from "react";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";
import LogoutButon from "../login/LogoutButton";


export default class Workspace extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: '', notes: []}

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNewNote = this.handleNewNote.bind(this);
    }

    handleTextChange(value){
        this.setState({text: value});
    }

    handleNewNote(){
        let updatedNotes = [...this.state.notes];
        updatedNotes.push(1);
        this.setState({notes: updatedNotes})
        console.log("New Note");
    }
    
    render() {
        const scrollStyle = {
            overflowY: "scroll",
            height: '95vh'
        }
        const allNotes = this.state.notes.map((note) =>
            <button key={note} type="button" className="btn btn-dark w-100">
                <i className="fas fa-sticky-note"></i>
            </button>
        );
        console.log("render");
        return (
            <div>
                <div className="container-fluid">
                    <br></br>
                    <div className="row">
                        <div className="col-md-1">
                            <button type="button" className="btn btn-dark w-100" onClick={this.handleNewNote}>
                                <i className="fas fa-plus-circle"></i>
                            </button>
                            <LogoutButon handleLogout = {this.props.handleLogout}/>
                        </div>
                        <div className="col-md-2" style={scrollStyle}>
                            {allNotes}
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