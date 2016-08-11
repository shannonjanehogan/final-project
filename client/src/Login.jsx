import React, {Component} from 'react';
import LoginEmail from './LoginEmail.jsx';
import LoginQuestion from './LoginQuestion.jsx';
import Nav from './Nav.jsx';

const Login = React.createClass ({
  getInitialState: function () {
     return {
      user: {
        name: '',
        email: '',
        question: '',
        id: ''
      },
      isLoggedIn: false
    };
  },
  handleEmailLogin: function (email) {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8000/api/login/email',
      data: email
    })
    .done(function(data) {
      console.log("Got data from API: ", data);
      this.setState({user: {name: data.name}});
      this.setState({user: {question: data.question}});
      this.setState({user: {id: data.id}});
    })
    .fail(function(jqXhr) {
      console.log('failed to register');
    });
  },
  handleQuestionLogin: function (question, answer) {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8000/api/login/submit',
      data: answer
    })
    .done(function(data) {
      console.log("Got data from API: ", data);
      this.setState({user: {id: data.id}});
    })
    .fail(function(jqXhr) {
      console.log('failed to register');
    });
  },
  handleSuccessfulLogin: function () {
    this.setState({isLoggedIn: true});
  },
  render() {
    console.log("Rendering <Login/>");
    return (

      <div className="login-body">
        <Nav/>
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
