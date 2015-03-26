
/*
 * Location
 *
 * @param {String} path
 * @param {String} title
 * @constructor
 */

function Location(path, title) {
  this._path = path;
  this._title = title || "";
}

// title sets the title and returns this, this is optional
// currently ignored on some browers
Location.prototype.title = function(title) {
  this._title = title;

  return this;
};

// push calls the push state method
Location.prototype.push = function() {
  history.pushState(null, this._title, this._path);
};

// replace calls the replaceState method
Location.prototype.replace = function() {
  history.replaceState(null, this._title, this._path);
};

// ngLocationProvider provider providers a service wrapper around pushState and
// location.href.
var mod = angular.module("ngLocationProvider", []);

mod.service("locationProvider", ["$window", function($window) {
  this.path = function(path) {
    return new Location(path);
  };

  // href is a utility method for $window.location.href
  this.href = function(href) {
    $window.location.href = href;
  };
}]);
