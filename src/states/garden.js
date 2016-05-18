var GardenState = {

	preload: function(){
		// Change the background color of the game
		game.stage.backgroundColor = '#159624';
		// Load sprites
		game.load.image('garden.background', 'assets/horta/background.png');
		game.load.image('garden.water.1', 'assets/horta/water1.png');
		game.load.image('garden.water.2', 'assets/horta/water2.png');
		game.load.image('garden.plant.1', 'assets/horta/plant1.png');
		game.load.image('garden.plant.2', 'assets/horta/plant2.png');
		game.load.image('garden.ground.1', 'assets/horta/ground1.png');
		game.load.image('garden.ground.2', 'assets/horta/ground2.png');
		game.load.image('garden.side', 'assets/horta/side.png');
		game.load.image('menu.background','assets/menu-background.png');
		game.load.image('menu.button.1', 'assets/horta/button-1.png');
		game.load.image('menu.button.2', 'assets/horta/button-2.png');
		game.load.image('menu.button.3', 'assets/horta/button-3.png');
		Quintal.loadSprite('back.button', 'back-button.png');
	},

	create: function(){
		// Set background image
		game.add.tileSprite(0, 0, gameWidth, gameHeight, 'garden.background');

		if( this.water )
			if( this.water == 1 )
				game.add.sprite(0,0,'garden.water.1');
			else
				game.add.sprite(0,0,'garden.water.2');

		if( this.plant ){
			if( this.plant == 1 )
				game.add.sprite(0,0,'garden.plant.1');
			else
				game.add.sprite(0,0,'garden.plant.2');
		} else {
			if( this.ground )
				game.add.sprite(0,0,'garden.ground.2');
			else
				game.add.sprite(0,0,'garden.ground.1');
		}

		game.add.sprite(0, 390, 'garden.side');

		game.add.sprite(220, 480, 'menu.background');
		var button1 = game.add.sprite(250, 490, 'menu.button.1');
		var button2 = game.add.sprite(430, 490, 'menu.button.2');
		var button3 = game.add.sprite(600, 490, 'menu.button.3');

		Quintal.onClick(
			game.add.sprite(0,0,'back.button'), function(){
				game.state.start('home');
			}
		);

		alertify.message('Que tal dar uma aguada na horta?');
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
