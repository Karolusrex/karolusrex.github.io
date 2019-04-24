"use strict";

var trigger = document.getElementById('load-shapeshifter');
var iframe = document.getElementById('shapeshifter-iframe');
trigger.addEventListener('click', function () {
  iframe.src = 'https://shape-shifter-app.firebaseapp.com';
});