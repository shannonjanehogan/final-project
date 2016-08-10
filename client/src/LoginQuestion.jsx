import React, {Component} from 'react';

const LoginQuestion = React.createClass ({

  getInitialState: function() {
    return {
      new_name: ""
    };
  },

  _onChange: function(event) {
    this.setState({new_name: event.target.value});
  },

  _onNameBlur: function(event) {
    this.props.onNewName(this.state.new_name);
  },

  _onSubmit: function(charCode) {
    console.log(charCode);
    if(charCode === 13) {
      this.props.onNewName(this.state.new_name);
    }
  },

  render: function() {
    return (
      <div>
        <nav id="nav-bar">
          <span class="logo">LOGO</span>
        </nav>
        <div>
          <h2 class="center questions"> Brand of your first car?</h2>
          <form>
            <input
              class="center input"
              type="answer"
              placeholder="Type your answer here."
              onKeyPress={(event)=>this._onSubmit(event.charCode)}
              onBlur={this._onNameBlur}
              value={this.state.new_name}
              onChange={this._onChange}
            >
            <input class="center button-login-submit button-primary" type="submit" value="Submit">
          </form>
        </div>
      </div>

    );
  }
});

export default LoginQuestion;

