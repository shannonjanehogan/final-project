import React, {Component} from 'react';
import Login from './Login';
import Signup from './Signup';

const Landing = React.createClass ({
  render() {
    console.log("Rendering <Login/>");
    return (
      <div>
        <nav id="welcome-nav-bar">
      <p class="intro"> Welcome to our app. </p>
      <p class="description"> OUR APP is a Lighthouse Labs final project designed to encourage seniors to connect with their loved ones through intuitive and minimal user interface. </p>
      <p class="instruction"> To begin, choose one of the options below. </p>
    </nav>

    <div class="new-user">
      <button class="button-user button-primary">I'm a new user</button>
    </div>

    <div class="returning-user">
      <button class="button-user  button-primary">I'm a returning user</button>
    </div>
      </div>

    );
  }
});

export default Landing;
