import React, {Component} from 'react';
import VideoPanel from './VideoPanel.jsx';
import Photo from './Photo.jsx';
import PhotoPanel from './PhotoPanel.jsx';

let data = 1;

const App = React.createClass ({
  getInitialState: function() {
    return {data: data};
  },
  render: function() {
    console.log("Rendering <App/>");
    return (
      <div>
        <nav id="nav-bar">
          <span class="logo">LOGO</span>
        </nav>
        <VideoPanel/>
        <PhotoPanel photos={data.photos}/>
      </div>

      );
    }
});

export default App;






