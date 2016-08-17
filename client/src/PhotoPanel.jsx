import React, {Component} from 'react';
import Photo from './Photo.jsx';
import $ from 'jquery';

const PhotoPanel = React.createClass({
  componentDidMount: function() {
    let self = this;

    if (self.isMounted()) {
      function fetchUserPhotos () {
        let id = self.props.id;
        $.ajax({
          type: 'GET',
          url: 'http://localhost:8080/api/user/' + id + '/images',
          dataType: "json"
        })
        .done(function(photosPath){
          if (photosPath == "") {
            console.log("hi")
          } else {
           renderPhotos(photosPath);
          }
        })
        .fail(function() {
          alert("We don't have this email on file!")
          console.log('failed to register');
        });
      }
      fetchUserPhotos();
    }
  },
  renderPhotos: function(photosPath) {
    photosPath.forEach(function(photoPath) {
      createPhotoElement(photoPath).appendTo("sidebar-image-gallery");
    });
  },
  createPhotoElement: function(photoPath) {
    return $(
      `<img src=${photoPath} width="206" height="206" alt="" />`
      );
  },
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
