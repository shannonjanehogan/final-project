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
      <div className="clearfix">
          <form className="todoForm form-horizontal" onNameSubmit={this.onNameSubmit}>
            <div className="form-group">
              <label htmlFor="task" className="col-md-2 control-label">Please enter your name:</label>
              <div className="col-md-10">
                <input type="text" id="name" ref="name" className="form-control" placeholder="What's your name?" />
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

export default SignupName;
