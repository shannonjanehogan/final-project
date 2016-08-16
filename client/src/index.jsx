require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import VideoPanel from './VideoPanel.jsx';
import PhotoPanel from './PhotoPanel.jsx';
import Photo from './Photo.jsx';
import Login from './Login.jsx';
import LoginEmail from './LoginEmail.jsx';
import LoginQuestion from './LoginQuestion.jsx';
import Signup from './Signup.jsx';
import SignupEmail from './SignupEmail.jsx';
import SignupName from './SignupName.jsx';
import SignupQuestion from './SignupQuestion.jsx';
import Gab from './Gab.jsx';
import $ from 'jquery';
// import ImageUpload from './ImageUpload.jsx';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

render((
  <Router history={hashHistory}>
      <Route path="/" component={Gab}>
        <IndexRoute component={App} />
      <Route path="/signup" component={Signup}>
        <IndexRoute component={SignupName} />
        <Route path="/signup" component={SignupName} />
      </Route>

      <Route path="/login" component={Login}>
        <IndexRoute component={LoginEmail} />
      </Route>
    </Route>
  </Router>
 ), document.getElementById('react-root'));

