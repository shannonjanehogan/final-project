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
          createPhotoElement(photoPath).appendTo(".gallery");
        });
      }
      function createPhotoElement(photoPath) {
         console.log("createPhotoElement");
        console.log("photoPath", photoPath);
        return $(
          `<div> <img src="//localhost:8080${photoPath.file_path}" width="206" height="206" alt="" /> </div>`
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

      <div className="gallery cf">
        <div>
          <img src="http://images.fineartamerica.com/images-medium-large/sleeping-puppy-on-white-background-square-dog-photography.jpg" />
        </div>
        <div>
          <img src="http://3.bp.blogspot.com/_gO5qkV6xivg/SNbQvpvslEI/AAAAAAAAAi4/xh10sk3E2bI/w1200-h630-p-nu/old_man_sea.jpg" />
        </div>
        <div>
          <img src="http://www.laparent.com/wp-content/uploads/2016/04/Green-Beauty-Square.jpg" />
        </div>
        <div>
          <img src="https://3.bp.blogspot.com/-l40cxDctA6E/V4HkprV35LI/AAAAAAAAqHw/xtLUIQcBRBYnqpiu9EX4GjfAoEkLv3JuwCKgB/s400/IMG_20160527_135521.jpg" />
        </div>
         <div>
          <img src="http://www.laparent.com/wp-content/uploads/2016/06/Fire-Service-Day-Bunni-Benaron-and-Captain-Bactat-with-Wilshire-and-Books-square.jpg" />
        </div>
        <div>
          <img src="https://lh3.googleusercontent.com/-VHpvd4FBnCU/V4lFxW26ZeI/AAAAAAAASIg/xEXRbWvpjQY/s400/blogger-image--1855246677.jpg" />
        </div>
        <div>
          <img src="http://2.bp.blogspot.com/-o7xgoIe5oTY/TcR8caqSLQI/AAAAAAAAaRE/qqRoaJFIfnE/s400/NBaron_Brooks.jpg" />
        </div>
      </div>
      </div>
    );
  }
});

export default PhotoPanel;
