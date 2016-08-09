require("../styles/layout.scss");
// require("../../server/public/scripts/app.js");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import VideoPanel from './VideoPanel.jsx';
import PhotoPanel from './PhotoPanel.jsx';
import Photo from './Photo.jsx';
import Login from './LoginEmail.jsx';
import LoginEmail from './LoginEmail.jsx';
import LoginQuestion from './LoginName.jsx';
import Signup from './LoginEmail.jsx';
import SignupEmail from './LoginEmail.jsx';
import SignupQuestion from './LoginName.jsx';

ReactDOM.render(<App />, document.getElementById('react-root'));



