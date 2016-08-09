import React, {Component} from 'react';

const Photo = React.createClass ({
  render() {
    console.log("Rendering <Photo/>");
    return (
      <div className="photo-body"> <span className="user">{this.props.photo.username}: </span>
      <span className = "photo"> {this.props.photo.photo}</span></div>

    );
  }
});

export default Photo;
