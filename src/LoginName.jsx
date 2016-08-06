import React, {Component} from 'react';

const LoginName = React.createClass ({

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
      <div class="container">
      <div class="row">
        <h2 class="center questions">Hi! What's your name?</h2>
      </div>
      <div class="row">
        <form>
          <input
            type="name"
            className="center-input"
            placeholder="Type your name here."
            onKeyPress={(event)=>this._onSubmit(event.charCode)}
            onBlur={this._onNameBlur}
            value={this.state.new_name}
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

export default LoginName;
