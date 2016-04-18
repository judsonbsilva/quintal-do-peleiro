var OrchardState = {
	
	preload: function(){ 
		// Change the background color of the game
		game.stage.backgroundColor = '#159624';
		// Load sprites
		game.load.image('complete', 'assets/pomar');
		game.load.image('background', 'assets/pomar/fundo.png');
		game.load.image('trees', 'assets/pomar/arvores.png');
		game.load.image('good.fruit', 'assets/pomar/frutas.png');
		game.load.image('bad.fruit', 'assets/pomar/frutas2.png');
	},

	create: function(){
		// Set background image
		game.add.tileSprite(0, 0, gameWidth, gameHeight, 'background');
		
		var self = this;
		// Display the sprites on screen
		
		this.trees = game.add.sprite(0, 0, 'trees');
		this.goodFruit = game.add.sprite(0, 0, 'good.fruit');
		this.badFruit = game.add.sprite(0, 0, 'bad.fruit');
		
		// Create group of menu options
		this.menu = game.add.group();
		
	}
};
