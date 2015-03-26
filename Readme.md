# js-nglocation-provider

[![Browserify](https://img.shields.io/badge/browserify-only-ff69b4.svg)](https://img.shields.io/badge/browserify-only-ff69b4.svg)
[![David DM](https://david-dm.org/nowk/js-nglocation-provider.png)](https://david-dm.org/nowk/js-nglocation-provider)

An ng-service wrapping `pushState` and `location.href`. 

## Install

    npm install js-nglocation-provider --save-dev

## Usage

    app.controller("UsersCtrl", ["locationProvider", "User" function(location, User) {
      $scope.save = function() {
        User.save({}, {}).$promise
          .then(function(data) {
            location.path("/users/" + data._id)
              .title("User : " + data.name)
              .push();
          })
          .catch(function(err) {
            // handle
          });
      };
    }]);

## License

MIT

