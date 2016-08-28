'use strict';

/**
 * @ngdoc overview
 * @name dkmApp
 * @description
 * # dkmApp
 *
 * Main module of the application.
 */
function getNewestShoes($q, shoeService) {
  var deferred = $q.defer();
  shoeService.getNewestShoes().then(function (resp) {
    deferred.resolve(resp.data);
  });
  return deferred.promise;
}
angular
  .module('shoeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])


  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "views/home.html",
        controller: "HomeCtrl",
        controllerAs: "vm",
        resolve: {
          newestShoes: ['$q', 'shoeService', getNewestShoes]
        }
      })
      .state('products', {
        url: "/products",
        templateUrl: "partials/state1.list.html",

      })
      .state('productDetail', {
        url: "/state2",
        templateUrl: "partials/state2.html"
      });

    $httpProvider.interceptors.push([
      '$q',
      'appConstant',
      function ($q,
                appConstant) {
        return {
          request: function (config) {
            if (config.url && !config.url.endsWith('html')) {
              config.headers["appkey"] = appConstant.appkey;
              config.headers["appsecret"] = appConstant.appsecret;
              config.headers["Content-Type"] = 'application/json';
            }

            return config;
          },
          response: function (response) {
            return $q.resolve(response);
          },

        }
      }]);

  });
