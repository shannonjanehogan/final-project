import React, {Component} from 'react';
import Nav from './Nav.jsx';
import Login from './Login.jsx';
import {Link} from 'react-router';

const LoginQuestion = React.createClass ({

  nextStep: function(e) {
    e.preventDefault()
    let data = {
      answer: this.refs.answer.value.trim(),
    }
    this.props.validateQuestionLogin(data)
  },
  render: function() {
    return (
      <div>
        <h2
          className="center questions">
          {this.props.user.question}
        </h2>
        <form onClick={this.nextStep} onSubmit={this.nextStep}>
          <input
            className="center input"
            type="text"
            id="answer"
            ref="answer"
            placeholder="Type your answer here."
            defaultValue={this.props.user.answer}
          />
          <Link
            className="button center button-login-submit button-primary"
            to="/">Submit
          </Link>
        </form>
      </div>
    );
  }
});

export default LoginQuestion;




