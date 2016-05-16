var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/list', {
      templateUrl: 'views/list.html',
      controller: 'ListController'
    }).
    otherwise({
      redirectTo: '/list'
    });
}]);