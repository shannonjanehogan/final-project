import React, {Component} from 'react';
import LoginEmail from './LoginEmail';
import LoginQuestion from './LoginQuestion';

const Login = React.createClass ({
  render() {
    console.log("Rendering <Login/>");
    return (
      <nav id="nav-bar"><span className="logo">LOGO</span></nav>
        <div className="login-body">
        <LoginEmail email={this.state.email} />
        <LoginQuestion answer={this.state.answer} question={this.state.question) onSubmit={this.handleSubmit}/>
      </div>

    );
  }
});

export default Photo;
