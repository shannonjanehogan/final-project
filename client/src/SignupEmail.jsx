import React, {Component} from 'react';
import Signup from './Signup.jsx';

const SignupEmail = React.createClass ({

  nextStep: function(e) {
    e.preventDefault()
    this.props.saveEmailValue(this.refs.email.value,)
    this.props.nextStep()
  },

  render: function() {
    return (
      <div>
        <h2 className="center questions">Hi! What's your email?</h2>
        <form >
          <input
            className="center input"
            type="email"
            ref="email"
            placeholder="Type your email here."
            defaultValue={this.props.user.email}/>
          <input
            className="center button-login-submit button-primary"
            type="submit"
            value="Submit"
            onClick={this.nextStep} />
        </form>
      </div>
    );
  }
});

export default SignupEmail;
