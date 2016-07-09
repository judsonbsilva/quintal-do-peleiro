var OrchardState = {
	name: 'orchard',
	preload: function(){
		// Change the background color of the game
		game.stage.backgroundColor = '#159624';
		// Load sprites
		Quintal.loadSprites([
			'orchard.background', 'orchard.trees', 'orchard.tree.side', 'orchard.tree.top',
			'orchard.good.fruit', 'orchard.bad.fruit', 'menu.background', 'orchard.button.1',
			'orchard.button.2', 'orchard.button.3' ,'header.back.button', 'orchard.compost.1',
			'orchard.compost.2', 'orchard.compost.3', 'header.eggs',
			'header.carrots',
			'header.fruits',
			'header.money',
		]);

		game.load.spritesheet('timer', 'assets/outros/ampulheta-sprite.png', 207, 318, 3);
	},

	create: function(){
		// Set background image
		game.add.tileSprite(0, 0, gameWidth, gameHeight, 'orchard.background');

		var self = this;

		this.time = 120;
		this.timeCounted = 0;
		this.points = 300;
		this.counter = 0;
		this.bonus = 'fruits';

		this.countQuestions = 0;

		this.treesOption = 0;
		this.trees = game.add.sprite(0, 0, 'orchard.trees');

		this.fruitOption = 0;
		this.goodFruit = game.add.sprite(30, 0, 'orchard.good.fruit');
		this.badFruit = game.add.sprite(30, 0, 'orchard.bad.fruit');

		this.sideTrees = game.add.sprite(0,0,'orchard.tree.side');
		this.topTrees = game.add.sprite(110,0,'orchard.tree.top');

		this.compostOption = 0;
		this.compost1 = game.add.sprite(0,200,'orchard.compost.1');
		this.compost2 = game.add.sprite(0,200,'orchard.compost.2');
		this.compost3 = game.add.sprite(0,200,'orchard.compost.3');

		// Create group of menu options
		//this.menu = game.add.group();
		game.add.sprite(220, 480, 'menu.background');

		Quintal.onClick(game.add.sprite(250, 490, 'orchard.button.1'),function(){

            self.fruitOption = 1;
			self.counter++;
			self.showBackButton = false;

		});

		Quintal.onClick(game.add.sprite(430, 490, 'orchard.button.2'),function(){
			self.treesOption = 1;
			self.counter++;
			self.showBackButton = false;
		});


		Quintal.onClick( game.add.sprite(600, 490, 'orchard.button.3'), function(){
			self.compostOption = 1;
			self.counter++;
			self.showBackButton = false;
		});

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

		if( this.treesOption == 3 ){
			this.sideTrees.visible = false;
			this.topTrees.visible = true;
		} else if( this.treesOption == 2 ){
			this.sideTrees.visible = true;
			this.topTrees.visible = false;
		} else if( this.treesOption == 1 ){
			this.sideTrees.visible = false;
			this.topTrees.visible = false;
		} else {
			this.sideTrees.visible = true;
			this.topTrees.visible = true;
		}

		if( this.compostOption == 1 ){
			this.compost1.visible = false;
			this.compost2.visible = true;
			this.compost3.visible = false;
		} else if( this.compostOption == 2 ){
			this.compost1.visible = false;
			this.compost2.visible = false;
			this.compost3.visible = true;
		} else if ( this.compostOption == 3 ){
			this.compost1.visible = true;
			this.compost2.visible = false;
			this.compost3.visible = false;
		} else {
			 this.compost1.visible = false;
			 this.compost2.visible = false;
			 this.compost3.visible = false;
		}

		HeaderState.update.call(this);
	}
};
