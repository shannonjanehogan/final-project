import React, {Component} from 'react';

const Nav = React.createClass ({
  render() {
    console.log("Rendering <Signup/>");
    return (
      <nav id="nav-bar"><span className="logo">LOGO</span></nav>
    );
  }
});

export default Nav;