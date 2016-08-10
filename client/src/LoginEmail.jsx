import React, {Component} from 'react';
import Login from './Login.jsx';
import Nav from './Nav.jsx';

const LoginEmail = React.createClass ({

  onEmailLogin: function (e) {
    e.preventDefault();
    var email = this.refs.email.value.trim();
    if (!email) {
      return;
    }
    this.props.onEmailLogin(email);
    this.refs.email.value = '';
    return;
  },

  render: function() {
    return (
<<<<<<< HEAD
      <div className="clearfix">
          <form className="todoForm form-horizontal" onEmailLogin={this.onEmailLogin}>
            <div className="form-group">
              <label htmlFor="task" className="col-md-2 control-label">Please enter your email:</label>
              <div className="col-md-10">
                <input type="text" id="email" ref="email" className="form-control" placeholder="What's your email?" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 col-md-offset-2 text-right">
                <input type="submit" value="Save Item" className="btn btn-primary" />
              </div>
            </div>
          </form>
        </div>
=======

      <div>

        <nav id="nav-bar">
          <span class="logo">LOGO</span>
        </nav>
        <div>
          <h2 class="center questions">Hi! What's your email?</h2>
          <form>
            <input
              class="center input"
              type="email"
              placeholder="Type your email here."
              onKeyPress={(event)=>this._onSubmit(event.charCode)}
              onBlur={this._onEmailBlur}
              value={this.state.new_email}
              onChange={this._onChange}
            >
            <input class="center button-login-submit button-primary" type="submit" value="Submit">
          </form>
        </div>
      </div>

>>>>>>> c822859c621a27786a50eee5015ccb7d85e28938
    );
  }
});

export default LoginEmail;

