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

const App = React.createClass ({
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
  render: function() {
    console.log("Rendering <App/>");
    if (document.cookie) {
      return (
        <div>
        <Nav/>
        <VideoPanel/>
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
