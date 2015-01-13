(function(){ 
	var app = angular.module('store', ['store-products']);

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
			],
			reviews: [
				{
					stars: 3,
					body: "It's a nice shirt!",
					author: "pippopappo@gmail.com"
				},
				{
					stars: 5,
					body: "Excellent!",
					author: "pluto@gmail.com"
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
			],
			reviews: [
				{
					stars: 1,
					body: "Bleahhh!",
					author: "prova@gmail.com"
				},
				{
					stars: 2,
					body: "Not satisfied!",
					author: "ciccio@gmail.com"
				}
			]
		}
	];

	app.controller('StoreController', function(){
		this.products = multipleGems;
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review); //add a new review written by user to the corrispondent product
			this.review = {}; //clean the form
		}
	});

})();