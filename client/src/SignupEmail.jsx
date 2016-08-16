import React, {Component} from 'react';
import Signup from './Signup.jsx';
import App from './App.jsx';

const SignupEmail = React.createClass ({


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
      this.props.saveEmailValue(this.refs.email.value)
      this.props.nextStep()
    }
  },

  render: function() {
    return (
      <div>
        <h2 className="center questions">Hi! What's your email?</h2>
        <form name="emailForm" >
          <input
            name="inputEmail"
            className="center input"
            type="email"
            ref="email"
            placeholder="Type your email here."
            defaultValue={this.props.user.email}/>
          <input
            className="center button-login-submit button-primary"
            type="submit"
            value="Submit"
            onClick={this.nextStep}
            onSubmit={this.nextStep} />
        </form>
      </div>
    );
  }
});

export default SignupEmail;
