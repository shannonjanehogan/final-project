import React, {Component} from 'react';
import Signup from './Signup.jsx';
import Dropdown from 'react-dropdown'

const options = [
  'one', 'two', 'three'
];

const defaultOption = options[0]

const SignupQuestion = React.createClass ({

  onAnswerSubmit: function (e) {
    e.preventDefault();
    var answer = this.refs.answer.value.trim();
    if (!answer) {
      return;
    }
    this.props.onAnswerSubmit(answer);
    this.refs.answer.value = '';
    return;
  },

  render: function() {
    return (
      <div className="clearfix">
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
          <form className="todoForm form-horizontal" onAnswerSubmit={this.onAnswerSubmit}>
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

export default SignupQuestion;
