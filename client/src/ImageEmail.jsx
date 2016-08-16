import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Dropzone from 'react-dropzone';
import Request from 'superagent';
import $ from 'jquery';
import { browserHistory } from 'react-router'



var ImageEmail = React.createClass({
    getInitialState: function() {
      return {
          email: ""

      };
    },

    handleEmailChange: function(input) {
   this.setState({email: input.target.value});
    },

    // checkEmail: function (e) {
    //   e.preventDefault();
    //   console.log("Cool")
    //   console.log(this.state.email)
    //   var req = Request.get('http://localhost:8080/api/images/upload')
    //   req.send({email: this.state.email})
    //   req.end(function() {
    //       console.log("Email works!");
    //       this.setState({user_email: id })
    //     });
    // },


    checkEmail: function(e) {
    var email = {email: this.state.email}
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8080/api/images/upload',
      dataType: "json",
      data: email
    })
    .done(function(data){
      browserHistory.push('/upload/' + data.user_id)


      console.log("It works")
    })
    .fail(function(jqXhr) {
      console.log('failed to register');
    });
  },

    render: function () {
        return (
            <div>
              <br/><br/>
              <form onSubmit={this.checkEmail} encType="multipart/form-data">
                <input type="text" name="emailField" onChange={this.handleEmailChange}/> <br />
                <input type="submit" name="submit" value="Submit" />
              </form>
            </div>
        );
    }
});

export default ImageEmail;
