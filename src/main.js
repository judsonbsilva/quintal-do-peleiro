var gameWidth = 960,
	gameHeight = 640,
	game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'root');

var mainState = {

	preload: function(){ 
		// Change the background color of the game
		game.stage.backgroundColor = '#159624';
		// Load sprites
		game.load.image('farm-complete', 'assets/granja-completa.jpg');
		game.load.image('farm', 'assets/granja.png');
		game.load.image('orchard', 'assets/pomar.png');
		game.load.image('garden', 'assets/horta.png');
	},

	create: function(){
		// Set background image
		//game.add.tileSprite(0, 0, gameWidth, gameHeight, 'farm-complete');
		
		var self = this;
		// Display the sprites on screen
		
		this.garden = game.add.sprite(100, 318, 'garden');
		this.garden.inputEnabled = true;
		this.garden.events.onInputDown.add(function(){
			self.selectOption('garden');
		}, this);

		this.orchard = game.add.sprite(600, 0, 'orchard');
		this.orchard.inputEnabled = true;
		this.orchard.events.onInputDown.add(function(){
			self.selectOption('orchard');
		}, this);
		
		
		this.farm = game.add.sprite(0, 0, 'farm');
		this.farm.inputEnabled = true;
		this.farm.events.onInputDown.add(function(){
			self.selectOption('farm');
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

// Add and start the 'main' state to start the game
game.state.add('main', mainState);  
game.state.start('main');