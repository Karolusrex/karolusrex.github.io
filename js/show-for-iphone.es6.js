const hideForIphoneClass = "hide-for-iphone";
const showForIphoneClass = "show-for-iphone";

if (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {
  [...document.getElementsByClassName(showForIphoneClass)].forEach(element => {
    /* Element is shown by removing the class, a bit counterintuitive, but it works.
     * It would be more complicated change the display property, which doesn't
     * have a specified value */
    element.classList.remove(showForIphoneClass);
  });

  [...document.getElementsByClassName(hideForIphoneClass)].forEach(element => {
    element.style.display = "none";
  });
}
