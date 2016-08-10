import React, {Component} from 'react';
import SignupName from './SignupName.jsx';
import SignupEmail from './SignupEmail.jsx';
import SignupQuestion from './SignupQuestion.jsx';
import Nav from './Nav.jsx';

const Signup = React.createClass ({
  getInitialState: function () {
    return {
      user: {
        name: '',
        email: '',
        question: '',
        answer: '',
      },
      isLoggedIn: false
    };
  },
  handleNameSubmit: function (name) {
    this.setState({user: {name: name});
  },
  handleEmailSubmit: function (email) {
    this.setState({user: {email: email});
  },
  handleQuestionSubmit: function (question, answer) {
    this.setState({user: {question: question, answer: answer});
  },

  render() {
    console.log("Rendering <Signup/>");
    return (
      <Nav/>
      <div className="signup-body">
      <SignupName name={this.state.name} onNameSubmit={this.handleNameSubmit}/>
      <SignupEmail email={this.state.email} onEmailSubmit={this.handleEmailSubmit}/>
      <SignupQuestion
          question={this.state.question}
          answer={this.state.answer}
          onAnswerSubmit={this.handleQuestionSubmit}/>
      </div>
    );
  }
});

export default Signup;
