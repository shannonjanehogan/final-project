require("../styles/layout.scss");
require("../../server/public/scripts/app.js");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import VideoPanel from './VideoPanel.jsx';
import PhotoPanel from './PhotoPanel.jsx';
import Photo from './Photo.jsx';
import LoginEmail from './LoginEmail.jsx';
import LoginName from './LoginName.jsx';

ReactDOM.render(<App />, document.getElementById('react-root'));



