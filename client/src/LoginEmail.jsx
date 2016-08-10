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
    );
  }
});

export default LoginEmail;
