'use strict';

/**
 * @ngdoc overview
 * @name modalTestAppApp
 * @description
 * # modalTestAppApp
 *
 * Main module of the application.
 */
angular
  .module('modalTestAppApp', [
    'ngAnimate',
    'ngCookies',
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
     
      .otherwise({
        redirectTo: '/'
      });
  });
