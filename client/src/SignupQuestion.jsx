import React, {Component} from 'react';
import Signup from './Signup.jsx';
import Dropdown from 'react-dropdown'

const options = [
  'Brand of first car?', 'Name of your first pet?', 'Which high school did you go to?'
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
      <div>
        <h2 className="center questions">Choose a security question.</h2>
          <form onAnswerSubmit={this.onAnswerSubmit}>
            <select name="security-questions" className="center security-questions">
              <option value="volvo">Brand of your first car?</option>
              <option value="saab">Name of your first pet?</option>
              <option value="fiat">Which high school did you go to?</option>
              <option value="audi">Name of birth place?</option>
            </select>
            <input className="center input" type="text" placeholder="Type your answer here." />
            <input className="center button-login-submit button-primary" type="submit" value="Submit" />
          </form>
      </div>
    );
  }
});

export default SignupQuestion;

       // <Dropdown className="center security-questions" options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />

// <div>
//       <h2 class="center questions">Choose a security question.</h2>
//       <select name="security-questions" class="center security-questions">
//         <option value="volvo">Volvo</option>
//         <option value="saab">Saab</option>
//         <option value="fiat">Fiat</option>
//         <option value="audi">Audi</option>
//       </select>
//       <form>
//         <input class="center input" type="answer" placeholder="Type your answer here." />
//         <input class="center button-login-submit button-primary" type="submit" value="Submit" />
//       </form>
//   </div>


