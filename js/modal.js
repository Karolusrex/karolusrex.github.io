const modalTargetAttribute = "data-target-modal";
const closeButtonClass = "close-button";
const modalClass = "modal";
const logoCardClass = "logo-card";
const portfoilioClass = "portfolio";
const modalShowingClass = "showing";

let currentlyShowingModal;

/* Close modal when click on dark background */
[...document.getElementsByClassName(modalClass)].forEach(element => {
  element.addEventListener("click", (event) => {
    if(event.target !== element){
      return;
    }
    element.classList.remove(modalShowingClass);    
  });
});

/* Close modal when click on X */
[...document.getElementsByClassName(closeButtonClass)].forEach(element => {
  element.addEventListener("click", () => {
    const modal = element.parentNode.parentNode;
    if (!modal.classList.contains(modalClass)) {
      throw new Error("Incorrect DOM structure!");
    }
    modal.classList.remove(modalShowingClass);
  });
});

/* Open modal when click on button */
[...document.querySelectorAll(`.${portfoilioClass} .${logoCardClass}`)].forEach(
  element => {
    element.addEventListener("click", () => {
      const targetId = element.getAttribute(modalTargetAttribute);
      const target = document.getElementById(targetId);
      if (!target) {
        throw new Error(`Unable to find modal target: ${targetId}`);
      }
      target.classList.add(modalShowingClass);
      currentlyShowingModal = target;
    });
  }
);

document.onkeydown = (event) => {
  event = event || window.event;
  if (event.keyCode == 27 && currentlyShowingModal) {
      currentlyShowingModal.classList.remove(modalShowingClass);
  }
};