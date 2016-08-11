import React, {Component} from 'react';
import Signup from './Signup.jsx';

const SignupEmail = React.createClass ({

  onEmailSubmit: function (e) {
    e.preventDefault();
    var email = this.refs.email.value.trim();
    if (!email) {
      return;
    }
    this.props.onEmailSubmit(email);
    this.refs.email.value = '';
    return;
  },

  render: function() {
    return (
      <div>
        <h2 className="center questions">Hi! What's your email?</h2>
        <form onEmailSubmit={this.onEmailSubmit}>
          <input className="center input" type="email" placeholder="Type your email here." />
          <input className="center button-login-submit button-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
});

export default SignupEmail;
