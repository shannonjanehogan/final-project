import React, {Component} from 'react';

const Nav = React.createClass ({
  render() {
    console.log("Rendering <Nav/>");
    return (
      <nav id="nav-bar"><span className="logo"> <a href="/"> Click here to go back to home page. </a> </span></nav>
    );
  }
});

export default Nav;
