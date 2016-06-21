var OrchardState = {
	name: 'orchard',
	preload: function(){
		// Change the background color of the game
		game.stage.backgroundColor = '#159624';
		// Load sprites
		Quintal.loadSprites([
			'orchard.background', 'orchard.trees', 'orchard.tree.side', 'orchard.tree.top',
			'orchard.good.fruit', 'orchard.bad.fruit', 'menu.background', 'orchard.button.1',
			'orchard.button.2', 'orchard.button.3' ,'header.back.button'
		]);
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

		Quintal.buttonAction(
			game.add.sprite(250, 490, 'orchard.button.1'),
			'pomar.veneno',
			UserData.questions.orchard.buttons[2],
			'Você já colocou pesticidas!'
		);

		Quintal.buttonAction(
			game.add.sprite(430, 490, 'orchard.button.2'),
			'pomar.poda',
			UserData.questions.orchard.buttons[0],
			'Você já podou as árvores!'
		);

		Quintal.buttonAction(
			game.add.sprite(600, 490, 'orchard.button.3'),
			'pomar.adubo',
			UserData.questions.orchard.buttons[1],
			'Você já adubou as árvores!'
		);


		Quintal.onClick(
			game.add.sprite(10,10,'header.back.button'), function(){
				game.state.start('home');
			}
		);

		alertify.message('Você poderia adubar as árvores!');
		game.add.text(800, 10, 'FAOFAOSDJFAOFDJFOADF',  {
			font: 'Bold 30px Arial',
			fill: '#ffffff'
		});
	}
};
