'use strict';

/**
 * @ngdoc function
 * @name dkmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dkmApp
 */
angular.module('shoeApp')
  .controller('HomeCtrl',
    ['shoeService',
      'newestShoes', function
      (shoeService,
       newestShoes) {

      var vm = this;
      vm.newestShoes = newestShoes.data;

    }]);
