const trigger = document.getElementById("load-shapeshifter");
const iframe = document.getElementById("shapeshifter-iframe");

trigger.addEventListener("click", () => {
  document.documentElement.requestFullscreen &&
    document.documentElement.requestFullscreen();
  iframe.src = "https://shape-shifter-app.firebaseapp.com";
});


if(!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)){
  iframe.classList.add('iphone');
}