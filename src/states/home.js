var HomeState = {

	preload: function(){
		// Change the background color of the game
		game.stage.backgroundColor = '#159624';
		// Load sprites
		Quintal.loadSprite('home.farm', 'inicio', 'home-farm.png');
		Quintal.loadSprite('home.orchard', 'inicio', 'home-orchard.png');
		Quintal.loadSprite('home.garden', 'inicio', 'home-garden.png');
		Quintal.loadSprite('home.menu.background', 'menu-background.png');
		Quintal.loadSprite('home.menu.button.1', 'inicio', 'button-1.png');
		Quintal.loadSprite('home.menu.button.2', 'inicio', 'button-2.png');
		Quintal.loadSprite('home.menu.button.3', 'inicio', 'button-3.png');
		Quintal.loadSprite('home.menu.button.4', 'inicio', 'button-4.png');
		Quintal.loadSprite('back.button', 'back-button.png');
	},

	create: function(){
		// Set background image
		//game.add.tileSprite(0, 0, gameWidth, gameHeight, 'farm-complete');

		var self = this;
		// Display the sprites on screen

		game.add.sprite(0, 237, 'home.garden');
		game.add.sprite(0, 0, 'home.farm');
		game.add.sprite(524, 0, 'home.orchard');


		game.add.sprite(220, 480, 'home.menu.background');
		this.orchard = game.add.sprite(260, 490, 'home.menu.button.2');
		this.garden  = game.add.sprite(350, 510, 'home.menu.button.1');
		this.farm    = game.add.sprite(480, 490, 'home.menu.button.3');
		game.add.sprite(600, 490, 'home.menu.button.4');

		this.orchard.inputEnabled = true;
		this.orchard.events.onInputDown.add(function(){
			self.selectOption('orchard');
		}, this);

		this.farm.inputEnabled = true;
		this.farm.events.onInputDown.add(function(){
			self.selectOption('farm');
		}, this);

		this.garden.inputEnabled = true;
		this.garden.events.onInputDown.add(function(){
			self.selectOption('garden');
		}, this);

	},
	selectOption: function( name ){
		game.state.start(name);
	},
	// Restart the game
	restartGame: function() {
		// Start the 'main' state, which restarts the game
		game.state.start('main');
	}
};
