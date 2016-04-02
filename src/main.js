var screenSize = Math.min( window.innerWidth || 600 , window.innerHeight ),
	game = new Phaser.Game(screenSize, screenSize, Phaser.AUTO, 'root');

var mainState = {

	preload: function(){ 
		// Change the background color of the game
		game.stage.backgroundColor = '#000050';
		// Load sprites
		game.load.spritesheet('ghost', 'assets/ghost-sprites.gif', 54, 58, 8);
		game.load.image('ghost-1', 'assets/ghost1.gif');
		game.load.image('column', 'assets/column.gif');
		game.load.image('background', 'assets/background.png');
	},

	create: function(){
		 // Set the physics system
		game.physics.startSystem(Phaser.Physics.ARCADE);
		// Add background stars
		this.background = game.add.tileSprite(0, 0, screenSize, screenSize, 'background');
		this.backgroundPosition = 0;
		// Display the bird on the screen
		this.ghost = this.game.add.sprite(screenSize/4, 10, 'ghost');

		this.ghost.animations.add('fly');
		this.ghost.animations.play('fly', 15, true);

		this.pipes = game.add.group(); // Create a group  
		this.pipes.enableBody = true;  // Add physics to the group  
		this.pipes.createMultiple(20, 'column');

		
		// Add gravity to the bird to make it fall
		game.physics.arcade.enable(this.ghost);
		this.ghost.body.gravity.y = 1000;

		this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
		
		// Call the 'jump' function when the spacekey is hit
		var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		spaceKey.onDown.add(this.jump, this);
	},

	update: function() {  
		
		//this.backgroundPosition = this.backgroundPosition < 0 ? screenSize: this.backgroundPosition - 1;
		this.background.tilePosition.x = this.backgroundPosition--;

		game.physics.arcade.overlap(this.ghost, this.pipes, this.restartGame, null, this);

		// If the bird is out of the world (too high or too low), call the 'restartGame' function
		if (this.ghost.inWorld == false)
			this.restartGame();
	},
	// Make the bird jump 
	jump: function() {  
		// Add a vertical velocity to the bird
		this.ghost.body.velocity.y = -350;
	},
	// Restart the game
	restartGame: function() {  
		// Start the 'main' state, which restarts the game
		game.state.start('main');
	},

	addOnePipe: function(x, y) {  
	    // Get the first dead pipe of our group
	    var pipe = this.pipes.getFirstDead();

	    // Set the new position of the pipe
	    pipe.reset(x, y);

	    // Add velocity to the pipe to make it move left
	    pipe.body.velocity.x = -200; 

	    // Kill the pipe when it's no longer visible 
	    pipe.checkWorldBounds = true;
	    pipe.outOfBoundsKill = true;
	},
	addRowOfPipes: function() {  
	    // Pick where the hole will be
	    var hole = Math.floor(Math.random() * 5) + 1;

	    // Add the 6 pipes 
	    for (var i = 0; i < 8; i++)
	        if (i != hole && i != hole + 1) 
	            this.addOnePipe( screenSize, i * 100 + 10);   
	}
};

// Add and start the 'main' state to start the game
game.state.add('main', mainState);  
game.state.start('main');