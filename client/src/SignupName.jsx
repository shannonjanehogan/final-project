import React, {Component} from 'react';
import Signup from './Signup.jsx';

const SignupName = React.createClass ({

  validateName: function() {
    var x = document.nameForm.inputName.value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    } else {
      return true;
    }
  },


  nextStep: function(e) {
    e.preventDefault()
    if (this.validateName()) {
      this.props.saveNameValue(this.refs.name.value)
      this.props.nextStep()
    }
  },



  render: function() {
    return (
      <div>
        <h2 className="center questions">Hi! What's your name?</h2>
        <form name="nameForm">
          <input
            name="inputName"
            className="center input"
            type="text"
            ref="name"
            placeholder="Type your name here."
            defaultValue={this.props.user.name}/>
          <input
            className="center button-login-submit button-primary"
            type="submit"
            value="Submit"
            onClick={this.nextStep}/>
        </form>
      </div>
    );
  }
});

export default SignupName;
