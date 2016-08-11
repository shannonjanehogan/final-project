import React, {Component} from 'react';
import LoginEmail from './LoginEmail';
import LoginQuestion from './LoginQuestion';
import Nav from './Nav.jsx';

const Login = React.createClass ({
  getInitialState: function () {
    return {
      isLoggedIn: false
    };
  },
  handleEmailLogin: function (email) {
    this.setState({user: {email: email});
  },
  handleQuestionLogin: function (question, answer) {
    this.setState({user: {question: question, answer: answer});
  },
  handleSuccessfulLogin: function () {
    this.setState({isLoggedIn: true});
  },
  render() {
    console.log("Rendering <Login/>");
    return (
      <Nav/>
        <div className="login-body">
        <LoginEmail email={this.state.user.email} onEmailLogin={this.handleEmailLogin}/>
        <LoginQuestion
            answer={this.state.user.answer}
            question={this.state.user.question}
            onQuestionLogin={this.handleQuestionLogin}
            onLoggedIn={this.handleSuccessfulLogin}/>
      </div>
    );
  }
});

export default Login;
