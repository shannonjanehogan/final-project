import React, {Component} from 'react';
import Signup from './Signup.jsx';
import Dropdown from 'react-dropdown';
import {Link} from 'react-router';
import App from './App.jsx';

const options = [
  'Brand of first car?', 'Name of your first pet?', 'Which high school did you go to?'
];

const defaultOption = options[0]

const SignupQuestion = React.createClass ({

  // onQuestionSubmit: function (e) {
  //   e.preventDefault();

  //   // if (!question) {
  //   //   return;
  //   // }
  //   this.props.onQuestionSubmit(question);
  //   // this.refs.answer.value = '';
  //   return;
  // },

  nextStep: function (e) {
    e.preventDefault();
    let question = document.getElementById("security-questions").value;
    let answer   = this.refs.answer.value.trim();
    this.props.saveSecurityValue(question, answer);
  },

  render: function() {
    return (
      <div>
        <h2 className="center questions">Choose a security question.</h2>
          <form onClick={this.nextStep} onSubmit={this.nextStep}>
            <select id="security-questions" className="center security-questions" >
              <option value="Brand of your first car?">Brand of your first car?</option>
              <option value="Name of your first pet?">Name of your first pet?</option>
              <option value="Which high school did you go to?">Which high school did you go to?</option>
              <option value="Name of birth place?">Name of birth place?</option>
            </select>
            <input
              className="center input"
              type="text"
              placeholder="Type your answer here."
              ref="answer"
              defaultValue={this.props.user.answer} />
            <Link
              className="button center button-login-submit button-primary"
              to="/">Submit</Link>
          </form>
      </div>
    );
  }
});

export default SignupQuestion;


