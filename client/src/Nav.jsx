import React, {Component} from 'react';

const Nav = React.createClass ({
  render() {
    console.log("Rendering <Nav/>");
    return (
      <nav id="nav-bar"><span className="logo"> Gab </span></nav>
    );
  }
});

export default Nav;
