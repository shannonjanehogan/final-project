$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      // $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});


navigator.getUserMedia ||
(navigator.getUserMedia = navigator.mozGetUserMedia ||
navigator.webkitGetUserMedia || navigator.msGetUserMedia);

if (navigator.getUserMedia) {
  navigator.getUserMedia({
  video: true,
  audio: true
  }, onSuccess, onError);
} else {
alert('getUserMedia is not supported in this browser.');
}


function onSuccess(stream) {
var video = document.getElementById('webcam');
var videoSource;
if (window.webkitURL) {
videoSource = window.webkitURL.createObjectURL(stream);
} else {
source = stream;
}
video.autoplay = true

video.src = videoSource;



}

function onError() {
alert('There has been a problem retreiving the streams - did you allow access?');
}
