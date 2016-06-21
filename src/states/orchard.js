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
			'orchard.compost.2', 'orchard.compost.3'
		]);
	},

	create: function(){
		// Set background image
		game.add.tileSprite(0, 0, gameWidth, gameHeight, 'orchard.background');

		var self = this;

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
			var data = UserData.questions.orchard.buttons[2];

			if( self.fruitOption != 0 ){
				alertify.message('Escolha outra opção!');
				return;
			}
			alertify.options({
				question: data.title,
				options: data.options,
				data: 'pomar.veneno',
				callback: function(){
					if( this.settings.option > 0 ){
						self.fruitOption = 1;
						self.countQuestions++;
						alertify.message('As frutas parecem melhores agora não?');
					}
					self.showBackButton = false;
				}
			});

		});


		Quintal.onClick(game.add.sprite(430, 490, 'orchard.button.2'),function(){
			var data = UserData.questions.orchard.buttons[0];

			if( self.treesOption != 0 ){
				alertify.message('Escolha outra opção!');
				return;
			}

			alertify.options({
				question: data.title,
				options: data.options,
				data: 'pomar.poda',
				callback: function(){
					if( this.settings.option > 0 ){
						self.treesOption = this.settings.option;
						self.countQuestions++;
					}
					self.showBackButton = false;
				}
			});
		});


		Quintal.onClick( game.add.sprite(600, 490, 'orchard.button.3'), function(){
			var data = UserData.questions.orchard.buttons[1];

			if( self.compostOption != 0 ){
				alertify.message('Escolha outra opção!');
				return;
			}

			alertify.options({
				question: data.title,
				options: data.options,
				data: 'pomar.adubo',
				callback: function(){
					if( this.settings.option > 0 ){
						self.compostOption = this.settings.option;
						self.countQuestions++;
					}
					self.showBackButton = false;
				}
			});
		});

		this.showBackButton = true;
		HeaderState.create.call(this);

		game.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);

		alertify.message('Você poderia adubar as árvores!');

	},
	updateCounter: function(){
		console.log(arguments, this, new Date());
	},
	update: function(){

		if( this.countQuestions == 3 )
			this.showBackButton = true;

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
