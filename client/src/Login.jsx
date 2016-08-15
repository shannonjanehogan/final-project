import React, {Component} from 'react';
import LoginEmail from './LoginEmail.jsx';
import LoginQuestion from './LoginQuestion.jsx';
import Nav from './Nav.jsx';
import App from './App.jsx';
import $ from 'jquery';

const Login = React.createClass ({
  getInitialState: function () {
     return {
      step: 1,
      isLoggedIn: false,
      user: {
        name: '',
        question: '',
        id: ''
      }
    };
  },
  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },
  validateEmailLogin: function(email) {
    let self = this;
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8080/api/login/email',
      dataType: "json",
      data: email
    })
    .done(function(data){
      let user = Object.assign({}, self.state.user);
      user.name = data[0].name;
      user.question = data[0].security_question;
      self.setState({ user, step: 2 });
    })
    .fail(function(jqXhr) {
      console.log('failed to register');
    });
  },
  validateQuestionLogin: function(answer) {
    let self = this;
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8080/api/login/submit',
      data: answer
    })
    .done(function(data) {
      return function() {
        // let user = {...this.state.user, name: name}
        // this.setState({...this.state, user: user})
        let user = Object.assign({}, self.state.user);
        user.id = data[0].id;
        self.setState({ user, isLoggedIn: true });
      }
    })
    .fail(function(jqXhr) {
      console.log('failed to register');
    });
  },
  successfulLogin: function () {
    this.setState({isLoggedIn: true});
  },
  showStep: function() {
    switch (this.state.step) {
      case 1:
        return <LoginEmail user={this.state.user}
                            validateEmailLogin={this.validateEmailLogin.bind(this)}
                            nextStep={this.nextStep} />
      case 2:
        return <LoginQuestion user={this.state.user}
                             validateQuestionLogin={this.validateQuestionLogin.bind(this)} />
    }
  },
  render() {
    console.log("Rendering <Login/>");
    return (
      <div className="login-body">
        <Nav/>
        {this.showStep()}
      </div>

    );
  }
});

export default Login;
