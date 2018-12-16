var videoPlayer = document.querySelector("#selfview");

console.log(videoPlayer);

navigator.mediaDevices.getUserMedia({video: true, audio:false}).then(function(stream) {
    videoPlayer.srcObject = stream;
}).catch(function(error) {
    console.error(error);
});