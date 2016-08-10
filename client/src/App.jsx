import React, {Component} from 'react';
import VideoPanel from './VideoPanel.jsx';
import Photo from './Photo.jsx';
import PhotoPanel from './PhotoPanel.jsx';
import Nav from './Nav.jsx';

const App = React.createClass ({
  getInitialState: function() {
    return {user: {}, isLoggedIn: false};
  },
  componentDidMount() {
    console.log("componentDidMount App");
    $.get("http://localhost:8000/api/users")
    .done(function(user) {
      console.log("Got data from API: ", user);
      this.setState({user: user, isLoggedIn: true})
    }.bind(this));
  }
  render: function() {
    console.log("Rendering <App/>");
    return (
      <div>
      <Nav/>
      <VideoPanel/>
      <PhotoPanel photos={user.photos}/>
      </div>

      );
    }
});

export default App;






