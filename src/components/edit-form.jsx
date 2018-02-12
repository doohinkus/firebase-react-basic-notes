import React, { Component } from "react";
import PropTypes from "prop-types";

class EditForm extends Component {
  constructor(props){
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    // update note content
    this.props.updateNoteContent(e.target.value);
  }
  render(){
    return(
      <div className="fw">
        <input type='text'
          id="note"
          onChange={this.handleInput}
          className="fw"
          placeholder={this.props.placeholderText}>
        </input>
      </div>
    );
  }
}

EditForm.propTypes = {
  updateNoteContent: PropTypes.func,
  placeholderText: PropTypes.string
}
export default EditForm;
