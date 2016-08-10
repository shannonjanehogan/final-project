require("../styles/layout.scss");
// require("../../server/public/scripts/app.js");

// Render the top-level React component
import React from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-dom';
import App from './App.jsx';
// import VideoPanel from './VideoPanel.jsx';
// import PhotoPanel from './PhotoPanel.jsx';
// import Photo from './Photo.jsx';
// import Login from './LoginEmail.jsx';
// import LoginEmail from './LoginEmail.jsx';
// import LoginQuestion from './LoginName.jsx';
import Signup from './Signup.jsx';
import SignupEmail from './SignupEmail.jsx';
import SignupName from './SignupName.jsx';
import SignupQuestion from './SignupQuestion.jsx';
// import SignupQuestion from './LoginName.jsx';
import { Router, Route, Link, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
  <Route path="/" component={App}/>
    <Route>
      <Route path="/signup" component={Signup}>
        <Route path="signup/name" component={SignupName} />
        <Route path="signup/email" component={SignupEmail} />
        <Route path="signup/question" component={SignupQuestion} />
      </Route>
    </Route>
      {/*
      <Route path="/login" component={Login}>
        <Route path="login/email" component={LoginEmail} />
        <Route path="login/question" component={LoginQuestion} />
      </Route>
      <Route path="/user/:user_id/video" component={App}>
        <Route path="/user/:user_id/video/" component={App}/>
        <Route path="/user/:user_id/video" component={App}/>
        <Route path="/user/:user_id/video" component={App}/>
      </Route>
    </Route>
    */}
  </Router>
 ),document.getElementById('react-root'));


// render((
//   <Router history={browserHistory}>
//     <Route path="/photoPanel/:photoPanelId" component={Users}/>   /* this.props.params.photoPanelId  is equal to the id in the route */
//     <Route path="/user/:userId" component={User}/>
//   </Router>
// ), document.getElementById('root'))



