import React, {Component} from 'react';
import AppearIn from 'appearin-sdk';

const VideoPanel = React.createClass({

  componentDidMount() {
    const appearin = new AppearIn();

    // appearin.getRandomRoomName().then(function (roomName) {
    //   let room;
    //   appearin.addRoomToIframe(document.getElementById("appearin-video"), roomName);
    //   room = roomName
    //   return room
    // });

    var iframe = document.getElementById("appearin-video");
    var roomName = "alice-room";
    appearin.addRoomToIframe(iframe, roomName);
  },

  render() {
    console.log("Rendering <VideoPanel/>");
    return (
      <div className="video-panel">
        <iframe id="appearin-video"></iframe>

      </div>
    );
  }
});

export default VideoPanel;
