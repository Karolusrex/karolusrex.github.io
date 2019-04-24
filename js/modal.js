"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var modalTargetAttribute = "data-target-modal";
var closeButtonClass = "close-button";
var modalClass = "modal";
var logoCardClass = "logo-card";
var portfoilioClass = "portfolio";
var modalShowingClass = "showing";
/* Close modal when click on dark background */

_toConsumableArray(document.getElementsByClassName(modalClass)).forEach(function (element) {
  element.addEventListener("click", function (event) {
    if (event.target !== element) {
      return;
    }

    element.classList.remove(modalShowingClass);
  });
});
/* Close modal when click on X */


_toConsumableArray(document.getElementsByClassName(closeButtonClass)).forEach(function (element) {
  element.addEventListener("click", function () {
    var modal = element.parentNode.parentNode;

    if (!modal.classList.contains(modalClass)) {
      throw new Error("Incorrect DOM structure!");
    }

    modal.classList.remove(modalShowingClass);
  });
});
/* Open modal when click on button */


_toConsumableArray(document.querySelectorAll(".".concat(portfoilioClass, " .").concat(logoCardClass))).forEach(function (element) {
  element.addEventListener("click", function () {
    var targetId = element.getAttribute(modalTargetAttribute);
    var target = document.getElementById(targetId);

    if (!target) {
      throw new Error("Unable to find modal target: ".concat(targetId));
    }

    target.classList.add(modalShowingClass);
  });
});