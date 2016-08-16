import React, {Component} from 'react';
import SignupName from './SignupName.jsx';
import SignupEmail from './SignupEmail.jsx';
import SignupQuestion from './SignupQuestion.jsx';
import Nav from './Nav.jsx';
import App from './App.jsx';
import Gab from './Gab.jsx';
import $ from 'jquery';

const Signup = React.createClass ({
  getInitialState: function () {
    return {
      step: 1,
      isLoggedIn: false,
      user: {
        name: '',
        email: '',
        question: '',
        answer: '',
        id: ''
      }
    };
  },
  handleQuestionSubmit: function (user) {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8080/api/signup/submit',
      dataType: "json",
      data: user
    })
    .done(function(data) {
      console.log("Got data from API: ", data);
      this.props.onSignedIn(data.id);
    })
    .fail(function(jqXhr) {
      console.log('failed to register');
    });
  },
  saveNameValue: function(name) {
    return function() {
      let user = {...this.state.user, name: name}
      this.setState({...this.state, user: user})
    }.bind(this)()
  },
  saveEmailValue: function(email) {
    return function() {
      let user = {...this.state.user, email: email}
      this.setState({...this.state, user: user})
    }.bind(this)()
  },
  saveSecurityValue: function(question, answer) {
    return function() {
      let user = {...this.state.user, question: question, answer: answer}
      this.setState({...this.state, user: user})
      this.handleQuestionSubmit(user);
    }.bind(this)()
  },
  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },
  showStep: function() {
    switch (this.state.step) {
      case 1:
        return <SignupName user={this.state.user}
                            nextStep={this.nextStep}
                            saveNameValue={this.saveNameValue}/>
      case 2:
        return <SignupEmail  user={this.state.user}
                             nextStep={this.nextStep}
                             saveEmailValue={this.saveEmailValue}/>
      case 3:
        return <SignupQuestion user={this.state.user}
                               nextStep={this.nextStep}
                               saveSecurityValue={this.saveSecurityValue}/>
    }
  },
  render() {
    console.log("Rendering <Signup/>", this.state);
    return (
      <div className="signup-body">
        <Nav/>
          {this.showStep()}
      </div>
    );
  }
});

export default Signup;
