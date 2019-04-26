"use strict";

var trigger = document.getElementById("load-shapeshifter");
var iframe = document.getElementById("shapeshifter-iframe");
trigger.addEventListener("click", function () {
  if (/(android)/i.test(navigator.userAgent)) {
    document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
  }

  iframe.src = "https://shape-shifter-app.firebaseapp.com";
});

if(!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)){
  iframe.classList.add('iphone');
}