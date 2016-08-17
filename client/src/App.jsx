import React, {Component} from 'react';
import VideoPanel from './VideoPanel.jsx';
import Photo from './Photo.jsx';
import PhotoPanel from './PhotoPanel.jsx';
import Nav from './Nav.jsx';
import {Link} from 'react-router';
import $ from 'jquery';
import Login from './Login.jsx';
import LoginEmail from './LoginEmail.jsx';
import LoginQuestion from './LoginQuestion.jsx';
import Signup from './Signup.jsx';
import SignupEmail from './SignupEmail.jsx';
import SignupName from './SignupName.jsx';
import SignupQuestion from './SignupQuestion.jsx';
import Landing from './LandingPage.jsx';
import ToggleDisplay from 'react-toggle-display';

const App = React.createClass ({
  getInitialState: function() {
        return { showVideo: false };
    },
    onClick: function() {
      if (this.state.showVideo === false) {
        this.setState({ showVideo: true });
      } else {
        this.setState({ showVideo: false });
      }
    },

  render: function() {
    console.log("Rendering <App/>");
    if (this.props.user) {
      return (
        <div>
        <Nav/>
        <input
          className="button center button-toggle button-primary"
          onClick={this.onClick} value="Start Video Chat"/>

        <ToggleDisplay show={this.state.showVideo}>
          <VideoPanel/>
        </ToggleDisplay>
        <PhotoPanel id={this.props.user.id}/>
        </div>
        );
    } else {
      return (
        <div>
        <Landing/>
        </div>
        );
    }
    }
});

export default App;
