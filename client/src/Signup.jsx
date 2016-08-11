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
        id: ''
      },
      isLoggedIn: false
    };
  },
  handleNameSubmit: function (name) {
    this.setState({user: {name: name}});
  },
  handleEmailSubmit: function (email) {
    this.setState({user: {email: email}});
  },
  handleQuestionSubmit: function (question, answer) {
    this.setState({user: {question: question, answer: answer}});
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/api/signup/submit',
        data: this.state.user
      })
      .done(function(data) {
        console.log("Got data from API: ", data);
        this.setState({user: {id: data}});
      })
      .fail(function(jqXhr) {
        console.log('failed to register');
      });
  },
  render() {
    console.log("Rendering <Signup/>");
    return (
      <div className="signup-body">
        <Nav/>
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
