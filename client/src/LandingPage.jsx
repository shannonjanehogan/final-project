import React, {Component} from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

const Landing = React.createClass ({
  render() {
    console.log("Rendering <Login/>");
    return (
      <div>
        <nav id="welcome-nav-bar">
      <p className="intro"> Welcome to our app. </p>
      <p className="description"> OUR APP is a Lighthouse Labs final project designed to encourage seniors to connect with their loved ones through intuitive and minimal user interface. </p>
      <p className="instruction"> To begin, choose one of the options below. </p>
    </nav>

    <div className="new-user">
      <button className="button-user button-primary">I'm a new user</button>
    </div>

    <div className="returning-user">
      <button className="button-user  button-primary">I'm a returning user</button>
    </div>
      </div>

    );
  }
});

export default Landing;
