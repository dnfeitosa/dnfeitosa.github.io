//var promocoes = new Category('promocoes', 'Promoções');
var livros = new Category('livros', 'Livros');
var consoleGames = new Category('jogos-console', 'Console & Games');
var instrumentos = new Category('instrumentos', 'Instrumentos Musicais');
var informatica = new Category('inform-tica', 'Informática');


//var consoleSubCat = new SubCategory('console-controles', 'Console & Controles');
//var gamesSubCat = new SubCategory('games', 'Games');
//consoleGames.addSubCategory(consoleSubCat);
//consoleGames.addSubCategory(gamesSubCat);
//
//var xbox = new Product('xbox', 'Xbox 360', 800, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium mi arcu, eget eleifend dolor faucibus eget. Proin sollicitudin scelerisque nunc non tempus. Donec tincidunt, justo ac elementum hendrerit, nisl lectus ullamcorper ligula, quis laoreet ipsum turpis vel orci. Etiam ultricies sed.', 'http://www.talkingwindows.com.br/wp-content/uploads/2015/07/xbox_360.jpg', true);
//var guitarraGuitarHero = new Product('guitar-hero-guitar', 'Guitarra p/ Guitar Hero', 100, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'http://ecx.images-amazon.com/images/I/81y5ilp3LDL._SL1500_.jpg', true);
//var guitarraGuitarHero2 = new Product('guitar-hero-guitar', 'Guitarra p/ Guitar Hero', 100, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'http://ecx.images-amazon.com/images/I/81y5ilp3LDL._SL1500_.jpg', true);
//var guitarraGuitarHero3 = new Product('guitar-hero-guitar', 'Guitarra p/ Guitar Hero', 100, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'http://ecx.images-amazon.com/images/I/81y5ilp3LDL._SL1500_.jpg', true);
//consoleSubCat.addProduct(xbox);
//consoleSubCat.addProduct(guitarraGuitarHero);
//consoleSubCat.addProduct(guitarraGuitarHero2);
//consoleSubCat.addProduct(guitarraGuitarHero3);
//
//var gearsOfWars = new Product('gears-of-war', 'Gears of War', 50, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'http://static.giantbomb.com/uploads/original/0/475/187494-gearsofwar.jpg', true);
//gamesSubCat.addProduct(gearsOfWars);
//
//var xboxPromotion = new Promotion([xbox, guitarraGuitarHero], 90);
//var xboxPromotion2 = new Promotion([xbox, gearsOfWars], 90);
//consoleGames.addPromotion(xboxPromotion);
//consoleGames.addPromotion(xboxPromotion2);
//
//promocoes.addPromotion(xboxPromotion);
//promocoes.addPromotion(xboxPromotion2);

var categories = [
//    promocoes,
    consoleGames,
    informatica,
    instrumentos,
    livros
];

var categoriesById = {};
categories.forEach(function (category) {
    categoriesById[category.id] = category;
});

