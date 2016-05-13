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
