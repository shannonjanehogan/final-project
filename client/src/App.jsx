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

  render: function() {
    console.log("Rendering <App/>");
    if (this.props.user) {
      return (
        <div>
        <Nav/>
        <VideoPanel/>
        <PhotoPanel photos={this.props.user.photos}/>
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
