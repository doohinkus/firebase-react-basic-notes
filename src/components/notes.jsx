import React, { Component } from "react";
import PropTypes from "prop-types";
import EditForm from "./edit-form";
import Button from "./button";

class Note extends Component{
  constructor(props){
    super(props);
    this.state ={
      isEditing: false,
      noteID: this.props.noteID,
      noteContent: this.props.noteContent
    }
    this.edit = this.edit.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.delete = this.delete.bind(this);
    this.updateNoteContent = this.updateNoteContent.bind(this);
  }
  edit(){
    this.setState({
      isEditing: true
    });
  }
  delete(){
    this.props.deleteNote(this.props.noteID);
  }
  updateNoteContent(content){
     this.setState({
       noteContent: content
     });
  }
  saveNote(){
    this.setState({
      isEditing: false
    });
    //call parent function
    this.props.saveNote(this.state.noteID, this.state.noteContent);
  }
  render (props){
    const content = !this.state.isEditing
      ? this.props.noteContent
      : <EditForm
          placeholderText={this.props.noteContent}
          updateNoteContent={this.updateNoteContent}
        />;
    return (
      <div className="note fade-in">
        <div className="note-content">
          <div>
            {content}
          </div>

          <Button
            editNote={this.edit}
            saveNote={this.saveNote}
            stopEdit={this.stopEdit}
            deleteNote={this.delete}
            isEditing={this.state.isEditing}
          />
        </div>
      </div>
    )
  }
}
Note.propTypes = {
  noteContent: PropTypes.string,
  noteID: PropTypes.string,
  saveNote: PropTypes.func,
  deleteNote: PropTypes.func,
}

export default Note;
