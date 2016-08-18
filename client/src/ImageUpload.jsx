import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Dropzone from 'react-dropzone';
import Request from 'superagent';
import Nav from './Nav.jsx';


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
          <br/><br/>
            <Dropzone ref="dropzone" onDrop={this.onDrop}>
                <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            <button type="button" onClick={this.onOpenClick}>
                Select Photos
            </button>
      </div>
    );
  }
});

export default ImageUpload;
