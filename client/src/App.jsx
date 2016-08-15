import React, {Component} from 'react';
import VideoPanel from './VideoPanel.jsx';
import Photo from './Photo.jsx';
import PhotoPanel from './PhotoPanel.jsx';
import Nav from './Nav.jsx';
import {Link} from 'react-router';
import $ from 'jquery';

const App = React.createClass ({
  getInitialState: function() {
    return {user: {}, isLoggedIn: false};
  },
  componentDidMount() {
    console.log("componentDidMount App");
    $.get("http://localhost:8080/api/users")
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
          <p className="intro"> Welcome to GAB. </p>
          <p className="description"> GAB is a program designed to encourage seniors to connect with their loved ones through intuitive and minimal user interface. </p>
          <p className="instruction"> To begin, click one of the options below. </p>
        </nav>

        <div className="new-user">
          <Link className="button button-primary button-user" to="/signup">I'm a new user</Link>
        </div>

        <div className="returning-user">
          <Link className="button button-primary button-user" to="/login">I'm a returning user</Link>
        </div>
        </div>
        );
    }
    }
});

export default App;






