var OrchardState = {

	preload: function(){
		// Change the background color of the game
		game.stage.backgroundColor = '#159624';
		// Load sprites
		game.load.image('orchard.background', 'assets/pomar/background.png');
		game.load.image('orchard.trees', 'assets/pomar/trees.png');
		game.load.image('orchard.tree.side', 'assets/pomar/tree-side.png');
		game.load.image('orchard.tree.top', 'assets/pomar/tree-top.png');
		game.load.image('orchard.good.fruit', 'assets/pomar/fruit.png');
		game.load.image('orchard.bad.fruit', 'assets/pomar/fruit-bad.png');
		game.load.image('menu.background','assets/menu-background.png');
		game.load.image('menu.button.1', 'assets/pomar/button-1.png');
		game.load.image('menu.button.2', 'assets/pomar/button-2.png');
		game.load.image('menu.button.3', 'assets/pomar/button-3.png');
	},

	create: function(){
		// Set background image
		game.add.tileSprite(0, 0, gameWidth, gameHeight, 'orchard.background');

		var self = this;

		this.trees = game.add.sprite(0, 0, 'orchard.trees');

		game.add.sprite(0,0,'orchard.tree.side');

		game.add.sprite(110,0,'orchard.tree.top');

		if( this.goodFruit )
			this.goodFruit = game.add.sprite(30, 0, 'orchard.good.fruit');
		else
			this.badFruit = game.add.sprite(30, 0, 'orchard.bad.fruit');

		// Create group of menu options
		//this.menu = game.add.group();
		game.add.sprite(220, 480, 'menu.background');
		game.add.sprite(250, 490, 'menu.button.1');
		game.add.sprite(430, 490, 'menu.button.2');
		game.add.sprite(600, 490, 'menu.button.3');
	}
};
