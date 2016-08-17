import React, {Component} from 'react';
import Signup from './Signup.jsx';
import App from './App.jsx';
import responsiveVoice from './responsivevoice.js';
import tts from 'text-to-speech-js';


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

  explainQuestion: function() {

    console.log("CLICKED")
    tts.talk("Hello World");
    responsiveVoice.speak("hello world");


  },

  render: function() {
    return (
      <div>
        <h2 onClick={this.explainQuestion} className="center questions">Hi! What's your name?</h2>
        <form name="nameForm">
          <input
            name="inputName"
            className="center input"
            type="text"
            ref="name"
            placeholder="Type your name here."
            defaultValue={this.props.user.name}/>
          <input
            alt="HI"
            className="center button button-primary button-login-submit "
            type="submit"
            value="Submit"
            onClick={this.nextStep}
            onSubmit={this.nextStep}/>
        </form>
      </div>
    );
  }
});

export default SignupName;
