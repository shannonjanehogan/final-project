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
  // getInitialState: function() {
  //   return {user: {id: 0},
  //         onSignedIn: this.onSignedIn};
  // },
  // componentDidMount() {
  //   console.log("componentDidMount App");
  //   $.get("http://localhost:8080/api/users")
  //   .done(function(user) {
  //     console.log("Got data from API: ", user);
  //     this.setState({user: user, isLoggedIn: true})
  //   }.bind(this));
  // },
  // _updateUserID: function(id) {
  //   return function() {
  //     debugger;
  //     let user = {...this.state.user, id: id}
  //     this.setState({...this.state, user: user})
  //   }.bind(this)()
  // },
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






