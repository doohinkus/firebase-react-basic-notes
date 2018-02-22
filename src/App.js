import React, { Component } from 'react';

import './App.css';
import Note  from './components/notes';
import Form from "./components/form";
import DB_CONFIG from "./config/config";
import firebase from "firebase";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      notes: []
    }
    this.addNote=this.addNote.bind(this);
    this.saveNote=this.saveNote.bind(this);
    this.deleteNote=this.deleteNote.bind(this);
    this.app=firebase.initializeApp(DB_CONFIG);
    this.db=this.app.database().ref().child('notes');

  }
  componentWillMount(){
    this.db.on('child_added', snap=>{
      const newData = {
        id: snap.key,
        content: snap.val().content
      }
      this.setState({
        notes: [newData, ...this.state.notes]
      });
    });

    this.db.on('child_removed', snap=>{
        const updatedState = this.state.notes.filter(note=>{
          return note.id !== snap.key;
        });
        this.setState({
          notes: updatedState
        });
    });

    this.db.on('child_changed', snap=>{
      // find changed item and update its content
      const changedData = {
        id: snap.key,
        content: snap.val().content
      }
      const updatedState = this.state.notes.map(note=>{
         if(note.id === changedData.id){
           return changedData
         }
         return note
      });
      this.setState({
        notes: updatedState
      });
    });

  }

  addNote(note){
    const newNoteKey = firebase.database().ref().child('notes').push().key;
    this.db.push().set({id: newNoteKey, content: note});
  }
  saveNote(noteID, content){
    const data = {
      id: noteID,
      content: content
    }
    this.db.child(noteID).update(data);
  }
  deleteNote(noteID){
    this.db.child(noteID).remove();
  }
  render() {
    const notes = this.state.notes.map(note => {
      return <Note
        noteContent={note.content}
        saveNote={this.saveNote}
        deleteNote={this.deleteNote}
        noteID={note.id}
        key={note.id} />
    });
    return (
      <div className="App w-7 m-auto">
        <header>
          <h1>Notes</h1>
        </header>
        <Form
          addNote={this.addNote}
          />
        {notes}
        <footer>
          <p>rp</p>
        </footer>
      </div>
    );
  }
}


export default App;
