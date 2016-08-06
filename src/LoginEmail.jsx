import React, {Component} from 'react';

const LoginEmail = React.createClass ({

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
      <div class="container">
      <div class="row">
        <h2 class="center questions">Hi! What's your email?</h2>
      </div>
      <div class="row">
        <form>
          <input
            type="email"
            className="center-input"
            placeholder="Type your email here."
            onKeyPress={(event)=>this._onSubmit(event.charCode)}
            onBlur={this._onEmailBlur}
            value={this.state.new_email}
            onChange={this._onChange}/>
          <input
            className="center-button-primary"
            type="submit"
            value="Submit"/>
        </form>
      </div>
      </div>
    );
  }
});

export default LoginEmail;
