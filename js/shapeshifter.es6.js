const trigger = document.getElementById('load-shapeshifter');
const iframe = document.getElementById('shapeshifter-iframe');


trigger.addEventListener('click', () => {
    iframe.src = 'https://shape-shifter-app.firebaseapp.com';
})

