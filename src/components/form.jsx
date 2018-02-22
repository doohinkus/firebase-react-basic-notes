import React, { Component } from "react";

class Form extends Component{
  constructor(props){
    super(props);
    this.state={
      newNoteContent: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.addNote = this.addNote.bind(this);
  }
  handleInput(e){
    //no need to constatnly save the data to fb
    this.setState({
      newNoteContent: e.target.value
    });
  }
  addNote(e){
    //let firebase add the id
    this.props.addNote(this.state.newNoteContent);
  }
  render (){
    return (
      <div className="form">
        <input
          type="text"
          className="note-input"
          placeholder="enter note"
          value={this.state.newNoteContent}
          onChange={this.handleInput}
        />
      <button className="note-button" onClick={this.addNote}>Add Note</button>
      </div>
    )
  }
}
export default Form;
