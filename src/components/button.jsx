import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render(){

    const buttons = this.props.isEditing
      ? <div>
          <a onClick={this.props.saveNote}>Save</a>
        </div>
      : <div>
          <a onClick={this.props.editNote}>Edit</a>
          <a onClick={this.props.deleteNote}>Delete</a>
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
