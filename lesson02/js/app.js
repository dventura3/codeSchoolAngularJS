(function(){ 
	var app = angular.module('store', [ ]);

	var multipleGems = [
		{
			name: 'Product 1',
			price: 7.98,
			description: "Bla bla bla",
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: "img/DB_images/shirt01_A.jpg",
					thumb: "img/DB_images/shirt01_A_min.jpg"
				},
				{
					full: "img/DB_images/shirt01_B.jpg",
					thumb: "img/DB_images/shirt01_B_min.jpg"
				}
			]
		},
		{
			name: 'Product 2',
			price: 11.64,
			description: "Bla bla bla",
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: "img/DB_images/shirt02_A.jpg",
					thumb: "img/DB_images/shirt02_A_min.jpg"
				},
				{
					full: "img/DB_images/shirt02_B.jpg",
					thumb: "img/DB_images/shirt02_B_min.jpg"
				}
			]
		}
	];

	app.controller('MultipleStoreController', function(){
		this.products = multipleGems;
	});

	app.controller('storeController', function(){
		this.products = multipleGems;
	});

	app.controller('PanelController', function(){
		this.tab = 1; //default value of tab

		this.selectTab = function(setTab){
			this.tab = setTab;
		}

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});

})();