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
    componentDidMount: function() {
    let self = this;
    if (self.isMounted()) {
      if (document.cookie) {
        function cookieToString(stringifiedCookie) {
          let idstring = document.cookie.split("=").pop()
          let id = parseInt(idstring);
          return id;
        };
      }
    }
  },
  cookieToString: (stringifiedCookie) => {
    let idstring = stringifiedCookie.split("=").pop()
    let id = parseInt(idstring);
    return id;
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

    if (this.state.showVideo) {

      var video = <ToggleDisplay show={this.state.showVideo}>
                    <VideoPanel/>
                  </ToggleDisplay>
    }
    if (document.cookie) {
      return (
        <div>
          <Nav/>
          <input
          className="button centerV button-toggle button-primary"
          onClick={this.onClick} value="Toggle Video Chat"/>
          {video}
          <PhotoPanel id={this.cookieToString(document.cookie)}/>
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
