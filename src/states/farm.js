var FarmState = {

	preload: function(){
		// Load sprites
		game.load.image('farm.background', 'assets/granja/background.png');
		game.load.image('farm.items', 'assets/granja/items.png');
		game.load.image('farm.chickens', 'assets/granja/chickens.png');
		game.load.image('farm.no.food', 'assets/granja/food0.png');
		game.load.image('farm.food.1', 'assets/granja/food1.png');
		game.load.image('farm.food.2', 'assets/granja/food2.png');
		game.load.image('farm.food.3', 'assets/granja/food3.png');
		game.load.image('farm.led.1', 'assets/granja/led1.png');
		game.load.image('farm.led.2', 'assets/granja/led2.png');
		game.load.image('farm.led.3', 'assets/granja/led3.png');
		game.load.image('farm.menu.1', 'assets/granja/menu1.png');
		game.load.image('farm.menu.2', 'assets/granja/menu2.png');
		game.load.image('farm.menu.3', 'assets/granja/menu3.png');
		game.load.image('farm.dirt', 'assets/granja/sujo.png');
		//game.load.image('orchard', 'assets/inicio/pomar.png');
		//game.load.image('garden', 'assets/inicio/horta.png');
	},

	create: function(){
		// Set background image
		game.add.tileSprite(0, 0, gameWidth, gameHeight, 'farm.background');

		if( this.dirt )
			game.add.sprite(200, 300, 'farm.dirt');

		if( this.led ){
			if( this.led == 1 )
				game.add.sprite(250, 0, 'farm.led.1');
			else if( this.led == 2 )
				game.add.sprite(250, 0, 'farm.led.2');
			else game.add.sprite(150, 0, 'farm.led.3');
		} else {
			game.add.sprite(500, 110, 'farm.no.food');
		}

		if( this.food )
			if( this.food == 1)
				game.add.sprite(500, 110, 'farm.food.1');
			if( this.food == 2)
				game.add.sprite(500, 110, 'farm.food.2');
			if( this.food == 3)
				game.add.sprite(500, 110, 'farm.food.3');

		else {
			game.add.sprite(500, 110, 'farm.no.food');
		}

		game.add.sprite(250, 200, 'farm.chickens');
		game.add.sprite(0, 110, 'farm.items');

	},
	selectOption: function( name ){
		alert(name);
	},
	// Restart the game
	restartGame: function() {
		// Start the 'main' state, which restarts the game
		game.state.start('main');
	}
};
