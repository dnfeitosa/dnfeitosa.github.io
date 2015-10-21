var app = angular.module('commerceApp', ['ui.bootstrap']);

app.factory('categoryService', function ($http) {

    return {
        find: function (categoryId) {
            var categoryInfo = categoriesById[categoryId];
            if (!categoryInfo) {
                return {};
            }

            return $http.get("/data/" + categoryId + ".json").then(function (response) {
                var category = new Category(categoryId, categoryInfo.name);
                var productsById = {};
                response.data.subcategories.forEach(function (data) {
                    if (data.id != 'promos') {
                        var subCategory = new SubCategory(data.id, data.name);
                        data.products.forEach(function (data) {
                            var product = new Product(data.id, data.name, data.price, data.description, data.image, data.available);
                            productsById[product.id] = product;
                            subCategory.addProduct(product);
                        });
                        category.addSubCategory(subCategory);
                    }
                });

                response.data.promotions.forEach(function (promo) {
                    var products = promo.products.map(function (productId) {
                        return productsById[productId];
                    });
                    var promotion = new Promotion(products, promo.price);
                    category.addPromotion(promotion);
                });
                return category;
            });
        }
    }

});

app.controller('CommerceCtrl', function ($scope, $location, categoryService) {
    $scope.categories = categories;

    $scope.show = function (categoryId) {
        function defaultCategory() {
            if ($location.path()) {
                return $location.path().replace(/\//, '');
            }

            return 'jogos-console';
        }

        categoryId = categoryId || defaultCategory();

        categoryService.find(categoryId).then(function (category) {
            $scope.category = category;
        });
        $scope.categoryId = categoryId;
    };
});

