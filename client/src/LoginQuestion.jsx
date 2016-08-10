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
<<<<<<< HEAD
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
=======
      <div>
        <nav id="nav-bar">
          <span class="logo">LOGO</span>
        </nav>
        <div>
          <h2 class="center questions"> Brand of your first car?</h2>
          <form>
            <input
              class="center input"
              type="answer"
              placeholder="Type your answer here."
              onKeyPress={(event)=>this._onSubmit(event.charCode)}
              onBlur={this._onNameBlur}
              value={this.state.new_name}
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

export default LoginQuestion;

