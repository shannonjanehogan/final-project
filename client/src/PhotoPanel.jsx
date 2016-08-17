import React, {Component} from 'react';
import Photo from './Photo.jsx';
import $ from 'jquery';

const PhotoPanel = React.createClass({
  componentDidMount: function() {
    let self = this;

    if (self.isMounted()) {
      function renderPhotos(photosPath) {
        console.log("hit renderPhotos");
        console.log("photosPath", photosPath);
        photosPath.forEach(function(photoPath) {
          createPhotoElement(photoPath).appendTo(".sidebar-image-gallery");
        });
      }
      function createPhotoElement(photoPath) {
         console.log("createPhotoElement");
        console.log("photoPath", photoPath);
        return $(
          `<img src="//localhost:8080${photoPath.file_path}" width="206" height="206" alt="" />`
        );
      }
      function fetchUserPhotos () {
        let id = self.props.id;
        $.ajax({
          type: 'GET',
          url: 'http://localhost:8080/api/user/' + id + '/images',
        })
        .done(function(photosPath){
          if (photosPath.length === 0) {
            console.log("hi")
          } else {
           renderPhotos(photosPath);
          }
        })
        .fail(function() {
          alert("Request not completed!")
          console.log('failed to register');
        });
      }
      fetchUserPhotos();
    }
  },
  render() {
    console.log("Rendering <PhotoPanel/>");
    return (
      <div className="photo-panel">
        <div className="sidebar-image-gallery">
          <img src="../images/users/1/f8b5db988e0dc9af680c964a166a1b0d.jpg" width="206" height="206" alt=""/>
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
