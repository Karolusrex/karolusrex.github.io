const expandTargetAttribute = "data-expand-target";
const expandClass = "expand";
const expandableClass = "expandable";

[...document.getElementsByClassName(expandClass)].forEach(element => {
  element.addEventListener("click", () => {
    const targetId = element.getAttribute(expandTargetAttribute);
    const target = document.getElementById(targetId);
    if (!target) {
      throw new Error(`Unable to find expandable target: ${targetId}`);
    }
    target.classList.remove("expandable");
    element.parentNode.removeChild(element);
    checkScrollyElements();
  });
});
