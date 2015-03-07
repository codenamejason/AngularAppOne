'use strict';

/**
 * @ngdoc function
 * @name newsFeedAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newsFeedAppApp
 */
angular.module('newsFeedAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
