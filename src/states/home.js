var HomeState = {

	preload: function(){
		// Change the background color of the game
		game.stage.backgroundColor = '#159624';
		// Load sprites
		game.load.image('home.farm', 'assets/inicio/home-farm.png');
		game.load.image('home.orchard', 'assets/inicio/home-orchard.png');
		game.load.image('home.garden', 'assets/inicio/home-garden.png');
	},

	create: function(){
		// Set background image
		//game.add.tileSprite(0, 0, gameWidth, gameHeight, 'farm-complete');

		var self = this;
		// Display the sprites on screen

		this.farm = game.add.sprite(0, 0, 'home.farm');
		this.farm.inputEnabled = true;
		this.farm.events.onInputDown.add(function(){
			self.selectOption('farm');
		}, this);

		this.garden = game.add.sprite(0, 237, 'home.garden');
		this.garden.inputEnabled = true;
		this.garden.events.onInputDown.add(function(){
			self.selectOption('garden');
		}, this);

		this.orchard = game.add.sprite(524, 0, 'home.orchard');
		this.orchard.inputEnabled = true;
		this.orchard.events.onInputDown.add(function(){
			self.selectOption('orchard');
		}, this);


		// Create group of menu options
		this.menu = game.add.group();

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
