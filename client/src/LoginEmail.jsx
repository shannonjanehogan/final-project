import React, {Component} from 'react';
import Login from './Login.jsx';
import Nav from './Nav.jsx';

const LoginEmail = React.createClass ({

  onEmailLogin: function (e) {
    e.preventDefault();
    var email = this.refs.email.value.trim();
    if (!email) {
      return;
    }
    this.props.onEmailLogin(email);
    this.refs.email.value = '';
    return;
  },

  render: function() {
    return (
      <div>
        <h2 className="center questions">Hi! What's your email?</h2>
        <form onEmailLogin={this.onEmailLogin}>
          <input className="center input" type="email" placeholder="Type your email here." />
          <input className="center button-login-submit button-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
});

export default LoginEmail;

