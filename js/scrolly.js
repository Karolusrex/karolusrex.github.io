"use strict";

// Generated with https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBAFgSwCZIKZgMIBsCGEIwC8MARIiugLQCuYUCWlEwATiFlqkiQNwBQoSLAhwQAdwRgA5tjwFiJFqgBuqHJySUAZmwC2TVuyySpvPgPDQYwOKmABrAMqGOATwCinXeijyYACgBKIgA-GABvPhgYAG0AOgSkEGBqbzo4qVQoT1Q03wAhV1l8ADkcb39yNExcfECAXTitEBZ3HBt_VC8fUIio6JgELQD-gZgu3J8MrPyQWiQTbAQfACU7KCC4qBAABxgAHhgJMCSxOMkwVBYACVQEKThYACoYAAY4gA4YAB9v0YHjqdzmBLjc7g9YABqI6SIHMNgcACaMBCxCSKTycQARiAkK44iAtFoIFlbvdHjAXu8AJz_YKRMbRCaY4C1CAAGQQ0DiOBQ_hE4kWbMC_DGAF9xlgSX1GZLJulWXJOdylLoQKp-aJjjJhaKBmL-mKRXwxfxAeIeSh3Ko6MqoOgrv4SPCjCQADTWWwOZwIrAebp0CDGklQAAqCG8cw2NjsThcfpyeQgHoAjK9XsagA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.4.3&externalPlugins=

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === "[object Arguments]"
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

var hiddenClass = "hidden-until-scrolled";
var showingClass = "revealed-from-scrolling";

var checkScrollyElements = function checkScrollyElements() {
  _toConsumableArray(document.getElementsByClassName(hiddenClass)).forEach(
    function(element) {
      if (
        element.getBoundingClientRect().top < window.innerHeight * 0.8 ||
        window.innerHeight + window.scrollY >= document.body.offsetHeight * 0.9
      ) {
        element.classList.add(showingClass);
      } else {
        element.classList.remove(showingClass);
      }
    }
  );
};

window.addEventListener("scroll", checkScrollyElements);
setTimeout(checkScrollyElements, 100);
