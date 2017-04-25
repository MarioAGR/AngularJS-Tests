(function() {

    "use strict";

    angular
        .module('ngClassifieds')
        .controller('newClassifiedsCtrl', function($scope, $state, $mdSidenav, $timeout, $mdDialog, classifiedsFactory) {

            var vm = this;

            vm.closeSidebar = closeSidebar;
            vm.saveClassified = saveClassified;

            $timeout(function() {
                $mdSidenav('left').open();
            });

            $scope.$watch('vm.sidenavOpen', function(sidenav) {
                if (sidenav === false) {
                    $mdSidenav('left')
                        .close()
                        .then(function() {
                            $state.go('classifieds');
                        });
                }
            });

            function closeSidebar() {
                vm.sidenavOpen = false;
            }

            function saveClassified(classified) {
                if (classified) {
                    classified.contact = {
                        name: "Mario",
                        phone: "(555) 555-5555",
                        email: "dasdasda@mail.com"
                    }
                    classified.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png"
                    $scope.$emit('newClassified', classified);
                    vm.sidenavOpen = false;
                }
            }

        })
})();
