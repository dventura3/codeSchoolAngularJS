(function(){ 
	var app = angular.module('store', [ ]);

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: "It's really nice...even if I don't know what it is. :D",
		canPurchase: true,
		soldOut: false
	};

	app.controller('StoreController', function(){
		this.product = gem;
	});

	var multipleGems = [
		{
			name: 'Product 1',
			price: 7.98,
			description: "Bla bla bla",
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'Product 2',
			price: 11.64,
			description: "Bla bla bla",
			canPurchase: true,
			soldOut: false
		}
	];

	app.controller('MultipleStoreArrayController', function(){
		this.products = multipleGems;
	});

	app.controller('MultipleStoreController', function(){
		this.products = multipleGems;
	});

})();