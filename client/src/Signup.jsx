import React, {Component} from 'react';
import SignupName from './SignupName.jsx';
import SignupEmail from './SignupEmail.jsx';
import SignupQuestion from './SignupQuestion.jsx';
import Nav from './Nav.jsx';

const Signup = React.createClass ({
  getInitialState: function () {
    return {
      users: {},
      name: '',
      email: '',
      question: '',
      answer: '',

    };
  },
  handleNameSubmit: function (name) {
    var name = this.state.name;
    user[name] = name;
    this.setState({name});
  },
  handleEmailSubmit: function (email) {
    var email = this.state.email;
    user[email] = email;
    this.setState({email});
  },
  handleQuestionSubmit: function (question, answer) {
    var question = this.state.question;
    var answer = this.state.answer;
    user[question] = question;
    user[answer] = answer;
    this.setState({question, answer});
  },

  render() {
    console.log("Rendering <Signup/>");
    return (
      <Nav/>
      <div className="signup-body">
      <SignupName name={this.state.name} onNameSubmit={this.handleNameSubmit}/>
      <SignupEmail email={this.state.email} onEmailSubmit={this.handleEmailSubmit}/>
      <SignupQuestion question={this.state.question} answer={this.state.answer} onAnswerSubmit={this.handleQuestionSubmit}/>
      </div>
    );
  }
});

export default Signup;
