import React, {Component} from 'react';
import Nav from './Nav.jsx';
import Login from './Login.jsx';

const LoginQuestion = React.createClass ({

  getInitialState: function() {
    return {
      isLoggedIn: false
    };
  },

  onAnswerLogin: function (e) {
    e.preventDefault();
    var answer = this.refs.answer.value.trim();
    if (!answer) {
      return;
    }
    this.props.onAnswerLogin(answer);
    this.refs.answer.value = '';
    return;
  },
  onLoggedin: function () {
    this.setState({isLoggedIn: true});
  }

  render: function() {
    return (
      <div className="clearfix">
        <h4> Here is your security question: {this.props.user.answer}</h4>
          <form className="todoForm form-horizontal" onAnswerLogin={this.onAnswerLogin} onLoggedin{this.onLoggedin}>
            <div className="form-group">
              <label htmlFor="task" className="col-md-2 control-label">Please enter your answer:</label>
              <div className="col-md-10">
                <input type="text" id="answer" ref="answer" className="form-control" placeholder="What's the answer to your security question?" />
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

export default LoginQuestion;

