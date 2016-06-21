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

		this.treesOption = 0;
		this.trees = game.add.sprite(0, 0, 'orchard.trees');

		this.fruitOption = 0;
		this.goodFruit = game.add.sprite(30, 0, 'orchard.good.fruit');
		this.badFruit = game.add.sprite(30, 0, 'orchard.bad.fruit');

		this.sideTrees = game.add.sprite(0,0,'orchard.tree.side');
		this.topTrees = game.add.sprite(110,0,'orchard.tree.top');

		// Create group of menu options
		//this.menu = game.add.group();
		game.add.sprite(220, 480, 'menu.background');

		Quintal.onClick(
			game.add.sprite(250, 490, 'orchard.button.1'),
			function(){

				var data = UserData.questions.orchard.buttons[2];

				alertify.options({
					question: data.title,
					options: data.options,
					data: 'pomar.veneno',
					callback: function(){
						if( this.settings.option > 0 ){
							self.fruitOption = 1;
							alertify.message('As frutas parecem melhores agora não?');
						}
						self.showBackButton = false;
					}
				});
			});

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

		this.showBackButton = true;
		HeaderState.create.call(this);

		alertify.message('Você poderia adubar as árvores!');

	},
	update: function(){
		if( this.fruitOption == 1 ){
			this.goodFruit.visible = true;
			this.badFruit.visible = false;
		} else {
			this.goodFruit.visible = false;
			this.badFruit.visible = true;
		}

		HeaderState.update.call(this);
	}
};
