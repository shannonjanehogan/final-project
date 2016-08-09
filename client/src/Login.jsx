import React, {Component} from 'react';

const Login = React.createClass ({
  render() {
    console.log("Rendering <Login/>");
    return (
       <nav id="nav-bar"><span className="logo">LOGO</span></nav>
      <div className="login-body">
      <LoginEmail/>
      <LoginQuestion/>
      </div>

    );
  }
});

export default Photo;
