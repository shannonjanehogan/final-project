import React from 'react';
import Nav from './Nav.jsx'
import cookie from 'react-cookie';
import {IndexLink} from 'react-router';
// Naighty!
import {browserHistory} from 'react-router';

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
    browserHistory.push('/');
  },
  render() {
    return (
      <div>
        {this.props.children && React.cloneElement(this.props.children, {
          user: this.state.user,
          onSignedIn: this.onSignedIn
        })}
      </div>
    );
  }
});

export default Gab;
