import React, {Component} from 'react';
import AppearIn from 'appearin-sdk';

let appearin = new AppearIn();
let room;

appearin.getRandomRoomName().then(function (roomName) {
  appearin.addRoomToIframe(document.getElementById("appearin-video"), roomName);
  room = roomName
  return room
});


const VideoPanel = React.createClass({
  render() {
    console.log("Rendering <VideoPanel/>");
    return (
      <div className="video-panel">
        <iframe id="appearin-video"></iframe>
        <p> appear.in/{room} </p>
      </div>
    );
  }
});

export default VideoPanel;
