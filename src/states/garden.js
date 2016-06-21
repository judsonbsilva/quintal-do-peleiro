var GardenState = {

	preload: function(){
		// Change the background color of the game
		game.stage.backgroundColor = '#159624';
		// Load sprites
		Quintal.loadSprites([
			'garden.background',
			'garden.water.1',
			'garden.water.2',
			'garden.plant.1',
			'garden.plant.2',
			'garden.ground.1',
			'garden.ground.2',
			'garden.side',		'garden.button.1',
			'garden.button.2',
			'garden.button.3',
			'header.back.button'
		]);
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

		Quintal.buttonAction(
			game.add.sprite(250, 490, 'garden.button.1'),
			'horta.plantar',
			UserData.questions.garden.buttons[1],
			'Você já plantou!'
		);

		Quintal.buttonAction(
			game.add.sprite(430, 490, 'garden.button.2'),
			'horta.arar',
			UserData.questions.garden.buttons[0],
			'Você já arou a terra!'
		);

		Quintal.buttonAction(
			game.add.sprite(600, 490, 'garden.button.3'),
			'horta.aguar',
			UserData.questions.garden.buttons[2],
			'Você já aguou!'
		);

		Quintal.onClick(
			game.add.sprite(10,0,'header.back.button'), function(){
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
