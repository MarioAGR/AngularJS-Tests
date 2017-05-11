angular
    .module('directoryApp', [])
    .controller('directoryController', function($scope) {
        $scope.list = [{
            name: 'Mario',
            age: 22
        }, {
            name: 'Alberto',
            age: 21
        }, {
            name: 'Guillen',
            age: 20
        }, {
            name: 'Rivas',
            age: 19
        }];

        $scope.addPerson = function() {
        	$scope.list.push({name: $scope.name, age: $scope.age});
        	$scope.name = '';
        	$scope.age = null;
        };
    });
