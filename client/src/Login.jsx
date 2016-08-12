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
        email: '',
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
  // saveValues: function(field_value) {
  //   return function() {
  //     fieldValues = assign({}, fieldValues, field_value)
  //   }.bind(this)()
  // },
  validateEmailLogin: (email) => {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8080/api/login/email',
      dataType: "json",
      data: email
    })
    .done((data) => {
      console.log("Got data from API: ", data);
      return function() {
        console.log(this.state.user);
        let user = this.state.user;
        user.name = name;
        user.question = question;
        this.setState({ user });
        this.nextStep()
      }
    })
    .fail(function(jqXhr) {
      console.log('failed to register');
    });
  },
  validateQuestionLogin: function (question, answer) {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8000/api/login/submit',
      data: answer
    })
    .done(function(data) {
      console.log("Got data from API: ", data);
      return function() {
        let user = this.state.user;
        user.id = id;
        this.setState({ user });
      }.bind(this)()
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
                            validateEmailLogin={this.validateEmailLogin}
                            nextStep={this.nextStep} />
      case 2:
        return <LoginQuestion user={this.state.user}
                             validateQuestionLogin={this.validateQuestionLogin} />
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
