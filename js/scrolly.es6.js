const hiddenClass = "hidden-until-scrolled";
const showingClass = "revealed-from-scrolling";

const scrollableContent = document.getElementById('scrollable-content');


const checkScrollyElements = () => {
  [...document.getElementsByClassName(hiddenClass)].forEach(element => {
    if (
      element.offsetHeight &&
      (element.getBoundingClientRect().top < window.innerHeight * 0.9 ||
        window.innerHeight + scrollableContent.scrollTop >= scrollableContent.scrollHeight * 0.95)
    ) {
      element.classList.add(showingClass);
    } else {
      element.classList.remove(showingClass);
    }
  });
};
scrollableContent.addEventListener("scroll", checkScrollyElements);
setTimeout(checkScrollyElements, 100);
