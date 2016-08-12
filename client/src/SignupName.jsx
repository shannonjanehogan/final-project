import React, {Component} from 'react';
import Signup from './Signup.jsx';

const SignupName = React.createClass ({

  nextStep: function(e) {
    e.preventDefault()

    var data = {
      name     : this.refs.name.value,
    }

    this.props.saveNameValue(data)
    this.props.nextStep()
  },

  render: function() {
    return (
      <div>
        <h2 className="center questions">Hi! What's your name?</h2>
        <form onNameSubmit={this.onNameSubmit}>
          <input className="center input" type="text" ref="name" placeholder="Type your name here." defaultValue={this.props.user.name}/>
          <input className="center button-login-submit button-primary" type="submit" value="Submit" onClick={this.nextStep}/>
        </form>
      </div>
    );
  }
});

export default SignupName;
