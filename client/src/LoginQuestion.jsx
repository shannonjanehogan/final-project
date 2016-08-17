import React, {Component} from 'react';
import Nav from './Nav.jsx';
import Login from './Login.jsx';
import {Link} from 'react-router';
import Gab from './Gab.jsx';
import $ from 'jquery';


const LoginQuestion = React.createClass ({


  validateAnswer: function() {
    var x = document.answerForm.inputAnswer.value;
    if ( x == null || x == "")
    {
      alert("You have entered an invalid answer!")
      return false
    } else {
        return true
      }
  },

  nextStep: function(e) {
    e.preventDefault()
    // if (this.validateAnswer()) {
    let data = {
      answer: this.refs.answer.value.trim(),
    }
    this.props.validateQuestionLogin(data)

    // }
  },


  render: function() {
    return (
      <div>
        <h2
          className="center questions">
          {this.props.user.question}
        </h2>
        <form name="answerForm">
          <input
            autoFocus
            name="inputAnswer"
            className="center input"
            type="text"
            id="answer"
            ref="answer"
            placeholder="Type your answer here."
            // onSubmit={this.nextStep}
            // defaultValue={this.props.user.answer}
          />
          <Link
            className="button center button-login-submit button-primary"
            onClick={this.nextStep}
            onSubmit={this.nextStep}
            to="/">Submit
          </Link>
        </form>
      </div>
    );
  }
});

export default LoginQuestion;




