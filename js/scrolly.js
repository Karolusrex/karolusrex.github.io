"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var hiddenClass = "hidden-until-scrolled";
var showingClass = "revealed-from-scrolling";

var checkScrollyElements = function checkScrollyElements() {
  _toConsumableArray(document.getElementsByClassName(hiddenClass)).forEach(function (element) {
    if (element.offsetHeight && (element.getBoundingClientRect().top < window.innerHeight * 0.9 || window.innerHeight + window.scrollY >= document.body.offsetHeight * 0.9)) {
      element.classList.add(showingClass);
    } else {
      element.classList.remove(showingClass);
    }
  });
};

window.addEventListener("scroll", checkScrollyElements);
setTimeout(checkScrollyElements, 100);