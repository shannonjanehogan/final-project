import React, {Component} from 'react';
import SignupName from './SignupName.jsx';
import SignupEmail from './SignupEmail.jsx';
import SignupQuestion from './SignupQuestion.jsx';
import Nav from './Nav.jsx';
import App from './App.jsx';

var user = {
        name: '',
        email: '',
        question: '',
        answer: '',
        id: ''
      };

const Signup = React.createClass ({
  getInitialState: function () {
    return {
      step: 1,
      isLoggedIn: false
    };
  },
  // handleQuestionSubmit: function (question, answer) {
  //   this.setState({user: {question: question, answer: answer}});
  //     $.ajax({
  //       type: 'POST',
  //       url: 'http://localhost:8000/api/signup/submit',
  //       data: this.state.user
  //     })
  //     .done(function(data) {
  //       console.log("Got data from API: ", data);
  //       this.setState({user: {id: data}});
  //     })
  //     .fail(function(jqXhr) {
  //       console.log('failed to register');
  //     });
  // },

  saveNameValue: function(name) {
    return function() {
      user = {user: {name: name}}
    }.bind(this)()
  },
  saveEmailValue: function(email) {
    return function() {
      user = {user: {email: email}}
    }.bind(this)()
  },
  saveQuestionValue: function(question) {
    return function() {
      user = {user: {question: question}}
    }.bind(this)()
  },
  saveAnswerValue: function(answer) {
    return function() {
      user = {user: {answer: answer}}
    }.bind(this)()
  },

  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },


  // submitRegistration: function() {
  //   // Handle via ajax submitting the user data, upon
  //   // success return this.nextStop(). If it fails,
  //   // show the user the error but don't advance

  //   this.nextStep()
  //   this.setState({
  //     isLoggedIn: true
  //   })
  // },

  showStep: function() {
    switch (this.state.step) {
      case 1:
        return <SignupName user={user}
                            nextStep={this.nextStep}
                            saveNameValue={this.saveNameValue}/>
      case 2:
        return <SignupEmail  user={user}
                             nextStep={this.nextStep}
                             saveEmailValue={this.saveEmailValue} />
      case 3:
        return <SignupQuestion user={user}
                               nextStep={this.nextStep}
                               saveQuestionValue={this.saveQuestionValue}
                               saveAnswerValue={this.saveAnswerValue}
                               // submitRegistration={this.submitRegistration}
                               />
      case 4:
        return <App/>
    }
  },
  render() {
    console.log("Rendering <Signup/>");
    return (
      <div className="signup-body">
        <Nav/>
          {this.showStep()}
      </div>
    );
  }
});

export default Signup;
