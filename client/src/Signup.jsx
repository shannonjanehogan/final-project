import React, {Component} from 'react';
import SignupName from './SignupName.jsx';
import SignupEmail from './SignupEmail.jsx';
import SignupQuestion from './SignupQuestion.jsx';
import Nav from './Nav.jsx';
import App from './App.jsx';


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
      let user = this.state.user;
      user.name = name;
      this.setState({ user });
    }.bind(this)()
  },
  saveEmailValue: function(email) {
    return function() {
      let user = this.state.user;
      user.email = email;
      this.setState({ user });
    }.bind(this)()
  },
  saveQuestionValue: function(question) {
    return function() {
      let user = this.state.user;
      user.question = question;
      this.setState({ user });
    }.bind(this)()
  },
  saveAnswerValue: function(answer) {
    return function() {
      let user = this.state.user;
      user.answer = answer;
      this.setState({ user });
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
        return <SignupName user={this.state.user}
                            nextStep={this.nextStep}
                            saveNameValue={this.saveNameValue}/>
      case 2:
        return <SignupEmail  user={this.state.user}
                             nextStep={this.nextStep}
                             saveEmailValue={this.saveEmailValue} />
      case 3:
        return <SignupQuestion user={this.state.user}
                               nextStep={this.nextStep}
                               saveQuestionValue={this.saveQuestionValue}
                               saveAnswerValue={this.saveAnswerValue}
                               // submitRegistration={this.submitRegistration}
                               />
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
