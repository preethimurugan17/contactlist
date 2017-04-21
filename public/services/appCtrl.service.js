(function () {
    'use strict';
    angular.module('myApp')
        .factory('AppService', ['$http', '$q', '$log',
            function ($http, $q, $log) {
                var apiService = {};
                apiService.getInfos = function () {
                    var deferred = $q.defer();
                    $http.get('/contactlist')
                        .then(function success(result) {
                            deferred.resolve(result);
                        }, function error(err) {
                            deferred.reject(err);
                            $log.log(err);
                        });
                    return deferred.promise;
                },
                    apiService.createNewInfo = function (data) {
                        var deferred = $q.defer();
                        $http.post('/contactlist', data)
                            .then(function success(result) {
                                deferred.resolve(result);
                            },
                            function error(err) {
                                deferred.reject(err);
                                $log.log(err);
                            });
                        return deferred.promise;
                    
            },

            apiService.deleteInfo = function (data) {
                        var deferred = $q.defer();
                        $http.delete('/contactlist/'+ data)
                            .then(function success(result) {
                                deferred.resolve(result);
                            },
                            function error(err) {
                                deferred.reject(err);
                                $log.log(err);
                            });
                        return deferred.promise;
                    },
                    
            apiService.editInfo = function (data) {
                        var deferred = $q.defer();
                        $http.get('/contactlist/'+ data)
                            .then(function success(result) {
                                deferred.resolve(result);
                            },
                            function error(err) {
                                deferred.reject(err);
                                $log.log(err);
                            });
                        return deferred.promise;
                    },
                     apiService.updateInfo = function (id,data) {
                         console.log(data+'m from updateInfo');
                        var deferred = $q.defer();
                        $http.put('/contactlist/'+ id,data)
                            .then(function success(result) {
                                deferred.resolve(result);
                            },
                            function error(err) {
                                deferred.reject(err);
                                $log.log(err);
                            });
                        return deferred.promise;
                    }


                return apiService;
            }]);
})();