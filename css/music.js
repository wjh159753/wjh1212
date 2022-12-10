window.onload = function () {
    setInterval("toggleSound()", 1);
  };
  function toggleSound() {
    var music = document.getElementById("music"); //获取ID
    if (music.paused) {
      //判读是否播放
      music.paused = false;
      music.play(); //没有就播放
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    function audioAutoPlay() {
      var audio = document.getElementById("music");
      audio.play();
      document.addEventListener(
        "WeixinJSBridgeReady",
        function () {
          audio.play();
        },
        false
      );
    }
    audioAutoPlay();
  });
  //--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
  document.addEventListener("touchstart", function () {
    function audioAutoPlay() {
      var audio = document.getElementById("music");
      audio.play();
    }
    audioAutoPlay();
  });