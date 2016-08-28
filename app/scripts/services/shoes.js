angular.module('shoeApp')
  .factory('shoeService', ['$http', '$q', 'appConstant', function ($http, $q, appConstant) {
    var service = {};

    function getNewestShoes() {
      return $http.get(appConstant.domain + '/shoes/news');
    }

    service.getNewestShoes = getNewestShoes;
    return service;
  }]);