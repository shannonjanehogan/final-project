import React, {Component} from 'react';
import Nav from './Nav.jsx';
import Login from './Login.jsx';

const LoginQuestion = React.createClass ({

  getInitialState: function() {
    return {
      isLoggedIn: false
    };
  },

  onAnswerLogin: function (e) {
    e.preventDefault();
    var answer = this.refs.answer.value.trim();
    if (!answer) {
      return;
    }
    this.props.onAnswerLogin(answer);
    this.refs.answer.value = '';
    return;
  },
  onLoggedin: function () {
    this.setState({isLoggedIn: true});
  },
  render: function() {
    return (
      <div>
        <h2 className="center questions"> TO ADD: Security Question</h2>
        <form onAnswerLogin={this.onAnswerLogin} onLoggedin={this.onLoggedin}>
          <input className="center input" type="text" id="answer" ref="answer" placeholder="Type your answer here."/>
          <input className="center button-login-submit button-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
});

export default LoginQuestion;




