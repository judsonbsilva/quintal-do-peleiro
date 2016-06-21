var FarmState = {

	preload: function(){
		// Load sprites
		Quintal.loadSprites([
			'farm.background',
			'farm.items',
			'farm.chickens',
			'farm.no.food',
			'farm.food.1',
			'farm.food.2',
			'farm.food.3',
			'farm.led.1',
			'farm.led.2',
			'farm.led.3',
			'farm.menu.1',
			'farm.menu.2',
			'farm.menu.3',
			'farm.dirt',
			'menu.background',
			'farm.button.1',
			'farm.button.2',
			'farm.button.3'
		]);

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

		game.add.sprite(220, 480, 'menu.background');

		Quintal.buttonAction(
			game.add.sprite(250, 490, 'farm.button.1'),
			'granja.alimento',
			UserData.questions.farm.buttons[0],
			'Você já alimentou as galinhas'
		);

		Quintal.buttonAction(
			game.add.sprite(430, 490, 'farm.button.2'),
			'granja.iluminacao',
			UserData.questions.farm.buttons[2],
			'Você já iluminou o ambiente'
		);

		Quintal.buttonAction(
			game.add.sprite(600, 490, 'farm.button.3'),
			'granja.limpeza',
			UserData.questions.farm.buttons[1],
			'Você já limpou o ambiente'
		);

		game.add.sprite(600, 490, 'farm.button.3');

		this.showBackButton = true;
		HeaderState.create.call(this);

		alertify.message('As galinhas parecem famintas');
	},
	// Restart the game
	restartGame: function() {
		// Start the 'main' state, which restarts the game
		game.state.start('main');
	}
};
