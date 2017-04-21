var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', '$log', 'AppService',
  function ($scope, $http, $log, AppService) {
    // New Contact Model
    $scope.contactlist = [];
    $scope.contact = {};

    AppService.getInfos()
      .then(function (result) {
        $scope.contactlist = result.data;
      });


    $scope.addContact = function () {
      AppService.createNewInfo($scope.contact)
        .then(function (result) {
          $scope.contactlist.push(result.data);
          $scope.contact = {};
        })
    };
    $scope.remove = function (x) {
      console.log(x);
      AppService.deleteInfo(x)
        .then(function (result) {
          AppService.getInfos()
            .then(function (result) {
              $scope.contactlist = result.data;
            })

        })
    };
    $scope.edit = function (id) {
      console.log(id);
      AppService.editInfo(id)
        .then(function (result) {
          console.log(result);
          $scope.contact = result.data;
        })
    
};  

 $scope.update = function () {
      console.log($scope.contact._id);
      AppService.updateInfo($scope.contact._id,$scope.contact)
        .then(function (result) {
          console.log(result);
          $scope.contact={};
          })
          AppService.getInfos()
            .then(function (result) {
              $scope.contactlist = result.data;
            
        })
    
};  

  }]);