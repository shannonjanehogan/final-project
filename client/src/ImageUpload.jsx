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
        var req = Request.post('http://localhost:8080/api/images/upload');
        files.forEach((file)=> {
            req.attach(file.name, file);
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
                <Dropzone ref="dropzone" onDrop={this.onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
                <button type="button" onClick={this.onOpenClick}>
                    Open Dropzone
                </button>
                {
                  this.state.files &&
                  <div>
                    <h2>Uploading {this.state.files.length} files...</h2>
                    <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
                  </div>
                }
            </div>
        );
    }
});

export default ImageUpload;
