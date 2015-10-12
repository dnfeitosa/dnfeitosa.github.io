var app = angular.module('commerceApp', ['ui.bootstrap']);


app.controller('CommerceCtrl', function ($scope, $http, $location) {
    $scope.categories = categories;

    $scope.show = function (categoryId) {
        function defaultCategory() {
            if ($location.path()) {
                return $location.path().replace(/\//, '');
            }

            return 'promocoes';
        }

        categoryId = categoryId || defaultCategory();

        $scope.category = categories.find(function (category) {
            return category.id == categoryId;
        });
    };
});

