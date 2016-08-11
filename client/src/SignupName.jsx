import React, {Component} from 'react';
import Signup from './Signup.jsx';

const SignupName = React.createClass ({

  onNameSubmit: function (e) {
    e.preventDefault();
    var name = this.refs.name.value.trim();
    if (!name) {
      return;
    }
    this.props.onNameSubmit(name);
    this.refs.name.value = '';
    return;
  },

  render: function() {
    return (
      <div>
        <h2 className="center questions">Hi! What's your name?</h2>
        <form onNameSubmit={this.onNameSubmit}>
          <input className="center input" type="text" placeholder="Type your name here." />
          <input className="center button-login-submit button-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
});

export default SignupName;

  // <div>
  //     <h2 class="center questions">Hi! What's your email?</h2>
  //     <form>
  //       <input class="center input" type="email" placeholder="Type your email here." />
  //       <input class="center button-login-submit button-primary" type="submit" value="Submit" />
  //     </form>
  // </div>

