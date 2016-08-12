import React, {Component} from 'react';
import Nav from './Nav.jsx';
import Login from './Login.jsx';

const LoginQuestion = React.createClass ({

  nextStep: function(e) {
    e.preventDefault()

    var data = {
      answer     : this.refs.answer.value.trim(),
    }

    this.props.validateQuestionLogin(data)
    this.props.nextStep()
  },
  render: function() {
    return (
      <div>
        <h2 className="center questions"> {this.props.user.question} </h2>
        <form>
          <input className="center input" type="text" id="answer" ref="answer" placeholder="Type your answer here." defaultValue={this.props.user.answer} />
          <input className="center button-login-submit button-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
});

export default LoginQuestion;




