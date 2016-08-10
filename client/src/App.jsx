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
  },
  render: function() {
    console.log("Rendering <App/>");
    if (this.state.isLoggedIn === true) {
      return (
        <div>
        <Nav/>
        <VideoPanel/>
        <PhotoPanel photos={user.photos}/>
        </div>
        );
    } else {
      return (
        <div>
        <nav id="welcome-nav-bar">
          <p className="intro"> Welcome to our app. </p>
          <p className="description"> OUR APP is a Lighthouse Labs final project designed to encourage seniors to connect with their loved ones through intuitive and minimal user interface. </p>
          <p className="instruction"> To begin, choose one of the options below. </p>
        </nav>

        <div className="new-user">
          <button className="button-user button-primary">I'm a new user</button>
        </div>

        <div className="returning-user">
          <button className="button-user  button-primary">I'm a returning user</button>
        </div>
        </div>
        );
    }
    }
});

export default App;






