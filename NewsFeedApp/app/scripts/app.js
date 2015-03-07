'use strict';
/* global app:true  */
/* exported app */
/**
 * @ngdoc overview
 * @name newsFeedAppApp
 * @description
 * # newsFeedAppApp
 *
 * Main module of the application.
 */
angular
  .module('newsFeedAppApp', [
	'Firebase',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
