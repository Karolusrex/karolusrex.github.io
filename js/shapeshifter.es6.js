const trigger = document.getElementById("load-shapeshifter");
const iframe = document.getElementById("shapeshifter-iframe");

trigger.addEventListener("click", () => {
  document.documentElement.requestFullscreen &&
    document.documentElement.requestFullscreen();
  iframe.src = "https://shape-shifter-app.firebaseapp.com";
});
