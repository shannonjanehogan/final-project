import React from 'react';
import Nav from './Nav.jsx'
import {IndexLink} from 'react-router';
// Naighty!
import {hashHistory} from 'react-router';

const Gab = React.createClass({
  getInitialState() {
    return {
      user: null
    }
  },
  onSignedIn(userId) {
    this.setState({
      user: {
        id: userId
      }
    });
    // TODO access the appropriate history list
    hashHistory.push('/');
  },
  render() {
    return (
      <div>
        <Nav />
        {this.props.children && React.cloneElement(this.props.children, {
          user: this.state.user,
          onSignedIn: this.onSignedIn
        })}
      </div>
    );
  }
});

export default Gab;
