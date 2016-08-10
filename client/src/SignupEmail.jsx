import React, {Component} from 'react';
import Signup from './Signup.jsx';

const SignupEmail = React.createClass ({

  onEmailSubmit: function (e) {
    e.preventDefault();
    var email = this.refs.email.value.trim();
    if (!email) {
      return;
    }
    this.props.onEmailSubmit(email);
    this.refs.email.value = '';
    return;
  },

  render: function() {
    return (
      <div className="clearfix">
          <form className="todoForm form-horizontal" onEmailSubmit={this.onEmailSubmit}>
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

export default SignupEmail;
