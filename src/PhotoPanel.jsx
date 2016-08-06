import React, {Component} from 'react';
import Photo from './Photo.jsx';

const PhotoPanel = React.createClass({
  render() {
    console.log("Rendering <PhotoPanel/>");
    return (
      <div className="photo-panel">
      {
        this.props.photos.map(function (photo, key) {
          return <Photo key={key} photo={photo} id={photo.id} />;
        })
      }
      </div>
    );
  }
});

export default PhotoPanel;
