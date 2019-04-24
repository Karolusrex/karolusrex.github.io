"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var expandTargetAttribute = "data-expand-target";
var expandClass = "expand";
var expandableClass = "expandable";

_toConsumableArray(document.getElementsByClassName(expandClass)).forEach(function (element) {
  element.addEventListener("click", function () {
    var targetId = element.getAttribute(expandTargetAttribute);
    var target = document.getElementById(targetId);

    if (!target) {
      throw new Error("Unable to find target: ".concat(target));
    }

    target.classList.remove('expandable');
    element.parentNode.removeChild(element);
    checkScrollyElements();
  });
});