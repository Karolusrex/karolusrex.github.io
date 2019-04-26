if(!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)){
    [...document.getElementsByTagName('a')].forEach(element => {
        element.removeAttribute('target');
    });
}