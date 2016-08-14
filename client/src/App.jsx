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


const App = React.createClass ({
  getInitialState: function() {
    return {user: {id: 0}, isLoggedIn: false};
  },
  // componentDidMount() {
  //   console.log("componentDidMount App");
  //   $.get("http://localhost:8080/api/users")
  //   .done(function(user) {
  //     console.log("Got data from API: ", user);
  //     this.setState({user: user, isLoggedIn: true})
  //   }.bind(this));
  // },
  _updateUserID: function(id) {
    return function() {
      debugger;
      let user = {...this.state.user, id: id}
      this.setState({...this.state, user: user})
    }.bind(this)()
  },
  render: function() {
    console.log("Rendering <App/>");
    if (this.state.user.id > 0) {
      return (
        <div>
        <Nav/>
        <VideoPanel/>
        <PhotoPanel photos={user.photos}/>
        <Login _updateUserID= {this._updateUserID} />
        <Signup _updateUserID= {this._updateUserID} />
        </div>
        );
    } else {
      return (
        <div>
        <nav id="welcome-nav-bar">
          <p className="intro"> Welcome to our app. </p>
          <p className="description"> OUR APP is a Lighthouse Labs final project designed to encourage seniors to connect with their loved ones through intuitive and minimal user interface. </p>
          <p className="instruction"> To begin, choose one of the options below. </p>
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






