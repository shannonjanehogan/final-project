import React, {Component} from 'react';
import LoginEmail from './LoginEmail.jsx';
import LoginQuestion from './LoginQuestion.jsx';
import Nav from './Nav.jsx';
import App from './App.jsx';

let fieldValues = {
  name     : null,
  email    : null,
  question : null,
  id       : null
}

const Login = React.createClass ({
  getInitialState: function () {
     return {
      step: 1,
      isLoggedIn: false
    };
  },
  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },
  saveValues: function(field_value) {
    return function() {
      fieldValues = assign({}, fieldValues, field_value)
    }.bind(this)()
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
      this.nextStep()
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
  showStep: function() {
    switch (this.state.step) {
      case 1:
        return <LoginEmail fieldValues={fieldValues}
                              nextStep={this.nextStep}
                              saveValues={this.saveValues} />
      case 2:
        return <LoginQuestion fieldValues={fieldValues}
                             nextStep={this.nextStep}
                             saveValues={this.saveValues} />
      case 3:
        return <App />
    }
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
