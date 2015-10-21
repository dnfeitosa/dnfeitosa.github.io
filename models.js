function Product(id, name, price, description, image, available) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.available = available;
}

function Category(id, name) {
    this.id = id;
    this.name = name;
    this.subCategories = [];
    this.promotions = [];
}

Category.prototype.addSubCategory = function (subCategory) {
    this.subCategories.push(subCategory);
}

Category.prototype.addPromotion = function (promotion) {
    this.promotions.push(promotion);
}

Category.prototype.hasPromotions = function () {
    return this.availablePromotions().length > 0;
}

Category.prototype.availablePromotions = function () {
    return this.promotions.filter(function (promotion) {
        return promotion.isAvailable();
    });
}

function SubCategory(id, name) {
    this.id = id;
    this.name = name;
    this.products = [];
}

SubCategory.prototype.addProduct = function (product) {
    this.products.push(product);
}

SubCategory.prototype.availableProducts = function () {
  return this.products.filter(function (product) {
    return product.available;
  });
}

function Promotion(products, price) {
    this.products = products;
    this.price = price;
}

Promotion.prototype.name = function () {
    return this.products.map(function (product) {
        return product.name;
    }).join(" + ");
}

Promotion.prototype.regularTotalPrice = function () {
    var total = 0;
    this.products.forEach(function (product) {
        total += product.price;
    })
    return total;
}

Promotion.prototype.isAvailable = function () {
    var res = this.products.filter(function (product) {
        return !product.available;
    });

    return res.length == 0;
}

