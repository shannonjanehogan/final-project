import React, {Component} from 'react';
import Login from './Login.jsx';
import Nav from './Nav.jsx';
import App from './App.jsx';

const LoginEmail = React.createClass ({

  validateEmail: function() {
    var x = document.emailForm.inputEmail.value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");

    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length || x == "")
    {
      alert("You have entered an invalid email address!")
      return false
    } else {
        return true
      }
  },


  nextStep: function(e) {
    e.preventDefault()
    if (this.validateEmail()) {
      let data = {
        email: this.refs.email.value,
      }
      if (this.props.validateEmailLogin(data)) {
      this.props.nextStep()
      }
    }
  },

  render: function() {
    return (
      <div>
        <h2 className="center questions">Hi! What's your email?</h2>
        <form name="emailForm">
          <input
            name="inputEmail"
            className="center input"
            type="email"
            id="email"
            ref="email"
            placeholder="Type your email here."
            defaultValue={this.props.user.email} />
          <input
            className="center button-login-submit button-primary"
            type="submit"
            onClick={this.nextStep}
            onSubmit={this.nextStep}
            value="Next" />
        </form>
      </div>
    );
  }
});

export default LoginEmail;
