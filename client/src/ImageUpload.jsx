import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Dropzone from 'react-dropzone';
import Request from 'superagent';

var ImageUpload = React.createClass({
  getInitialState: function () {
      return {
        files: []
      };
  },
  onDrop: function(files){
    let req = Request.post('http://localhost:8080/api/images/upload');
    files.forEach((file)=> {
      req.attach("img", file);
    });
    req.end(function() {
      console.log("test");
    });
  },
  onOpenClick: function () {
    this.refs.dropzone.open();
  },
  _onSubmitHandler: function (email, file) {
    let self = this;
    e.preventDefault();
    let useremail = self.refs.email.value.trim();
    let userfile = self.refs.file.value.trim();
    self.props.validateEmail(email, file);
    self.ref.email.value = '';
    return;
  },
  _validateEmail: (email, file) => {
    let self = this;
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8080/api/upload/email',
      dataType: "json",
      data: email
    })
    .done(function(data){
      let id = data[0].id;
      _uploadPhoto(id, file);
    })
    .fail(function(jqXhr) {
      console.log('failed to register');
    });
  },
  _uploadPhoto: (id, file) => {
    let self = this;
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8080/api/images/upload',
      dataType: "json",
      data: id, file
    })
    .done(function(data){
      let user = Object.assign({}, self.state.user);
      user.name = data[0].name;
      user.question = data[0].security_question;
      self.setState({ user, step: 2 });
    })
    .fail(function(jqXhr) {
      console.log('failed to register');
    });
  },
  render: function () {
    return (
      <div className="clearfix">
        <form className="todoForm form-horizontal">
          <div className="form-group">
            <label htmlFor="task" className="col-md-2 control-label">Please enter the email of who you want the photo sent to:</label>
            <div className="col-md-10">
              <input type="text" id="email" ref="email" className="form-control" placeholder="What's their email?" />
            </div>
          </div>
          <Dropzone ref="dropzone">
              <div>Try dropping some files here, or click to select files to upload.</div>
          </Dropzone>
          <button type="button" onClick={this.onOpenClick}>
              Open Dropzone
          </button>
          {this.state.files &&
            <div>
              <h2>Uploading {this.state.files.length} files...</h2>
              <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
            </div>
          }
          <div className="row">
            <div className="col-md-10 col-md-offset-2 text-right">
              <input
                onClick={this._onSubmitHandler}
                type="submit"
                value="Send Photo"
                className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    );
  }
});

export default ImageUpload;
