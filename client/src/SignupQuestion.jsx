import React, {Component} from 'react';
import Signup from './Signup.jsx';

const SignupEmail = React.createClass ({

  getInitialState: function() {
    return {
      new_email: ""
    };
  },

  _onChange: function(event) {
    this.setState({new_email: event.target.value});
  },

  _onEmailBlur: function(event) {
    this.props.onNewEmail(this.state.new_email);
  },

  _onSubmit: function(charCode) {
    console.log(charCode);
    if(charCode === 13) {
      this.props.onNewMessage(this.state.new_email);
    }
  },

  render: function() {
    return (
      <div>
        <nav id="nav-bar">
          <span class="logo">LOGO</span>
        </nav>
        <div>
          <h2 class="center questions">Choose a security question.</h2>
          <select name="security-questions" class="center security-questions">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <form>
            <input
              class="center input"
              type="answer"
              placeholder="Type your answer here."
              onKeyPress={(event)=>this._onSubmit(event.charCode)}
              onBlur={this._onEmailBlur}
              value={this.state.new_email}
              onChange={this._onChange}
            >
            <input class="center button-login-submit button-primary" type="submit" value="Submit">
          </form>
        </div>
      </div>
    );
  }
});

export default SignupQuestion;



