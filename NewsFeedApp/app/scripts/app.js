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
	'firebase',
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
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
