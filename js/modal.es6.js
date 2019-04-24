const modalTargetAttribute = "data-target-modal";
const closeButtonClass = "close-button";
const modalClass = "modal";
const loadModalClass = "load-modal";
const modalShowingClass = "showing";
const unscrollableClass = "unscrollable";

const mainContent = document.getElementById("scrollable-content");

let currentlyShowingModal;

const showModal = modal => {
  modal.classList.add(modalShowingClass);
  currentlyShowingModal = modal;
  mainContent.classList.add(unscrollableClass);
};

const hideModal = modal => {
  modal.classList.remove(modalShowingClass);
  currentlyShowingModal = null;
  document.exitFullscreen && document.exitFullscreen()
  mainContent.classList.remove(unscrollableClass);
};

/* Close modal when click on dark background */
[...document.getElementsByClassName(modalClass)].forEach(element => {
  element.addEventListener("click", event => {
    if (event.target !== element) {
      return;
    }
    hideModal(element);
  });
});

/* Close modal when click on X */
[...document.getElementsByClassName(closeButtonClass)].forEach(element => {
  element.addEventListener("click", () => {
    const modal = element.parentNode.parentNode;
    if (!modal.classList.contains(modalClass)) {
      throw new Error("Incorrect DOM structure!");
    }
    hideModal(modal);
  });
});

/* Open modal when click on button */
[...document.getElementsByClassName(loadModalClass)].forEach(element => {
  element.addEventListener("click", () => {
    const targetId = element.getAttribute(modalTargetAttribute);
    const target = document.getElementById(targetId);
    if (!target) {
      throw new Error(`Unable to find modal target: ${targetId}`);
    }
    currentlyShowingModal &&
      currentlyShowingModal !== target &&
      hideModal(currentlyShowingModal);
    showModal(target);
  });
});

document.onkeydown = event => {
  event = event || window.event;
  if (event.keyCode == 27 && currentlyShowingModal) {
    hideModal(currentlyShowingModal);
  }
};
