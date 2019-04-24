const hiddenClass = "hidden-until-scrolled";
const showingClass = "revealed-from-scrolling";

const checkScrollyElements = () => {
  [...document.getElementsByClassName(hiddenClass)].forEach(element => {
    if (
      element.offsetHeight &&
      (element.getBoundingClientRect().top < window.innerHeight * 0.9 ||
        window.innerHeight + window.scrollY >= document.body.offsetHeight * 0.9)
    ) {
      element.classList.add(showingClass);
    } else {
      element.classList.remove(showingClass);
    }
  });
};
window.addEventListener("scroll", checkScrollyElements);
setTimeout(checkScrollyElements, 100);
