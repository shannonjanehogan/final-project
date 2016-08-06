import React, {Component} from 'react';
import VideoPanel from './VideoPanel.jsx';
import Photo from './Photo.jsx';
import PhotoPanel from './PhotoPanel.jsx';

var socket = new WebSocket("ws://localhost:4000/socketserver")

// var data = {
//   currentUser: {name: "Bob"},
// };

const App = React.createClass ({
  getInitialState: function() {
    // return {data: data};
  },

componentDidMount: function() {

  socket.onmessage = (event) => {
    console.log("Received message: ", event.data);
    var dataObj = JSON.parse(event.data);

    // switch(dataObj.type) {
    //   case "incomingMessage":
    //     let newMessageList = this.state.data.messages;
    //     newMessageList.push(dataObj);
    //     console.log(newMessageList);
    //     this.setState({
    //       data: {
    //         messages: newMessageList,
    //         currentUser: this.state.data.currentUser,
    //         onlineClients: dataObj.content
    //       }
    //     })

    //     break;
    //   case "incomingNotification":
    //     alert(dataObj.message);
    //     break;
    //   case "onlineClients":
    //     console.log(dataObj.content);
    //     this.setState({
    //       data: {
    //         messages: this.state.data.messages,
    //         currentUser: this.state.data.currentUser,
    //         onlineClients: dataObj.content
    //       }
    //     });
    //   break;
    //   default:
    //     throw new Error("Unknown event type " + data.type);
    // }
  }

  },

// _onNewMessage: function(newUsername, newMessage) {

//   socket.send(JSON.stringify({type: "postMessage", username: newUsername, message: newMessage}));

// },

// _onNewUsername: function(newUsername) {

//   socket.send(JSON.stringify({
//     type: "postNotification",
//     username: newUsername,
//     message: `${data.currentUser.name} changed their name to ${newUsername}`
//   }));

// },

render: function() {
    return (
      <div>
      <nav id="nav-bar"><span class="logo">LOGO</span></nav>
      <VideoPanel/>
      <PhotoPanel photos={data.photos}/>
      </div>

      );
    }
});

export default App;
