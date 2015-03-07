'use strict';

/**
 * @ngdoc function
 * @name newsFeedAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the newsFeedAppApp
 */
angular.module('newsFeedAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
