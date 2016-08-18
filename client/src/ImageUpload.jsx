import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Dropzone from 'react-dropzone';
import Request from 'superagent';
import Nav from './Nav.jsx';
import {Link} from 'react-router';


var ImageUpload = React.createClass({

  onDrop: function(files){
    var id = +window.location.pathname.split('/')[2]
      var req = Request.post('http://localhost:8080/api/images/upload/' + id);
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
  render: function () {
      return (
        <div>
          <Link
            to="/">
            <Nav/>
          </Link>
          <Dropzone ref="dropzone" className="dropzone-style" onDrop={this.onDrop}>
              <div className="dropzone-text">Try dropping some files here, or click to select files to upload.</div>
          </Dropzone>
          <button type="button" className="center button-image-send button-primary">
              Send Photos to Alice!
          </button>
        </div>
      );
  }
});

export default ImageUpload;
