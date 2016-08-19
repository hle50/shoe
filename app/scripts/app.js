'use strict';

/**
 * @ngdoc overview
 * @name dkmApp
 * @description
 * # dkmApp
 *
 * Main module of the application.
 */
angular
  .module('dkmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "views/home.html",
        controller: "HomeCtrl",
        controllerAs :"vm"
      })
      .state('products', {
        url: "/products",
        templateUrl: "partials/state1.list.html",

      })
      .state('productDetail', {
        url: "/state2",
        templateUrl: "partials/state2.html"
      })

  });
