var a = new Audio("../assets/audio/jogi.mp3");
function palyAll(){
    if (a.paused || a.currentTime <= 0) {
        a.play();
      } else {
        a.pause();
      }
}