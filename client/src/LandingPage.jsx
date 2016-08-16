import React, {Component} from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import {Link} from 'react-router';

const Landing = React.createClass ({
  render() {
    console.log("Rendering <Login/>");
    return (
      <div>
        <nav id="welcome-nav-bar">
        <p className="intro"> Welcome to Gab. </p>
      <p className="description"> Remember your favorite grandparent's living room? A place where you instantly felt at
      home - surrounded by pictures and stories of years past. But now you live miles away and you can't go visit on
      Sundays like before. Miles shouldn't keep you from seeing Grandma.
                            <br/> Gab is a Lighthouse Labs final project connecting seniors with their loved ones through intuitive and minimalist user interface. </p>

      <p className="instruction"> To begin, choose one of the options below. </p>
    </nav>

    <div className="new-user">
      <Link className="button button-user  button-primary"
            to="/signup">I'm a new user
          </Link>
    </div>

    <div className="returning-user">
      <Link className="button button-user  button-primary"
            to="/login">I'm a returning user
          </Link>
    </div>
      </div>

    );
  }
});

export default Landing;
