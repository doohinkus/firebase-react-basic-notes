import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render(){

    const buttons = this.props.isEditing
      ? <div>
          <button onClick={this.props.saveNote}>Save</button>
        </div>
      : <div>
          <button onClick={this.props.editNote}>Edit</button>
          <button onClick={this.props.deleteNote}>Delete</button>
        </div>;

    return(
      <div className="flex m-auto">
        {buttons}
      </div>
    );
  }
}
Button.propTypes = {
  saveNote: PropTypes.func,
  editNote: PropTypes.func,
  deleteNote: PropTypes.func
}

export default Button;
