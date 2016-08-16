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
  _onSubmitHandler: function (e, files) {
    e.preventDefault();
    let self = this;
    let useremail = self.refs.email.value.trim();
    self.props.validateEmail(email, files);
    self.ref.email.value = '';
    return;
  },
  _validateEmail: (email, files) => {
    let self = this;
    $.ajax({
      type: 'GET',
      url: 'http://localhost:8080/api/upload/email',
      dataType: "json",
      data: email
    })
    .done(function(data){
      let id = data[0].id;
      _uploadPhoto(id, files);
    })
    .fail(function(jqXhr) {
      console.log('failed to register');
    });
  },
  _uploadPhoto: (files) => {
    let self = this;
    let req = Request.post('http://localhost:8080/api/images/upload').send({data: id});
    files.forEach((file)=> {
      req.attach("img", file);
    });
    req.end(function() {
      console.log("test");
    });
  },
  previewFile: function () {
    let self = this;
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
      preview.src = reader.result;
    }, false);

    if (file) {
      debugger;
      reader.readAsDataURL(file);
      self._uploadPhoto(file)
    }
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
          <div className="row">
            <div className="col-md-10 col-md-offset-2 text-right">
              <input type="file" onChange={this.previewFile}/>
              <img src="" height="200" alt="Image preview..."/>
            </div>
          </div>
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
