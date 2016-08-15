import React, {Component} from 'react';
import Photo from './Photo.jsx';

const PhotoPanel = React.createClass({
  render() {
    console.log("Rendering <PhotoPanel/>");
    return (
      <div className="photo-panel">
        <div className="sidebar-image-gallery">
          <img src="http://placekitten.com/300/300" width="206" height="206" alt=""/>
          <img src="http://placekitten.com/300/300" width="206" height="206" alt=""/>
          <img src="http://placekitten.com/300/300" width="206" height="206" alt=""/>
          <img src="http://placekitten.com/300/300" width="206" height="206" alt=""/>
          <img src="http://placekitten.com/300/300" width="206" height="206" alt=""/>
          <img src="http://placekitten.com/300/300" width="206" height="206" alt=""/>
          <img src="http://placekitten.com/300/300" width="206" height="206" alt=""/>
        </div>
      </div>
    );
  }
});

export default PhotoPanel;
