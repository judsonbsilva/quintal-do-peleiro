var GardenState = {

	preload: function(){
		// Change the background color of the game
		game.stage.backgroundColor = '#159624';
		// Load sprites
		Quintal.loadSprites([
			'garden.background',
			'garden.water.1',
			'garden.water.2',
			'garden.plant.1',
			'garden.plant.2',
			'garden.ground.1',
			'garden.ground.2',
			'garden.side',
			'garden.button.1',
			'garden.button.2',
			'garden.button.3',
			'header.back.button',
			'header.eggs',
			'header.carrots',
			'header.fruits',
			'header.money',
			'menu.background'
		]);

		game.load.spritesheet('timer', 'assets/outros/ampulheta-sprite.png', 207, 318, 3);
	},

	create: function(){
		// Set background image
		game.add.tileSprite(0, 0, gameWidth, gameHeight, 'garden.background');

		var self = this;

		this.time = 30;
		this.timeCounted = 0;
		this.points = 30;
		this.counter = 0;
		this.bonus = 'carrots';

		this.groundOption = 0;
		this.ground1 = game.add.sprite(0,0,'garden.ground.2');
		this.ground2 = game.add.sprite(0,0,'garden.ground.1');

		this.plantOption = 0;
		this.plant1 = game.add.sprite(0,0,'garden.plant.1');
		this.plant2 = game.add.sprite(0,0,'garden.plant.2');


		this.waterOption = 0;
		this.water1 = game.add.sprite(0,0,'garden.water.1');
		this.water2 = game.add.sprite(0,0,'garden.water.2');


		game.add.sprite(0, 390, 'garden.side');

		game.add.sprite(220, 480, 'menu.background');


		Quintal.onClick( game.add.sprite(250, 490, 'garden.button.1'), function(){
			var data = UserData.questions.garden.buttons[1];

			if( self.plantOption != 0 ){
				alertify.message('Escolha outra opção!');
				return;
			}

			alertify.options({
				question: data.title,
				options: data.options,
				data: 'horta.plantar',
				callback: function(){
					if( this.settings.option > 0 ){
						console.log("HERE", this.settings.option);
						self.plantOption = this.settings.option;
						self.showBackButton = false;
						self.counter++;
					}
				}
			});
		});


		Quintal.onClick( game.add.sprite(430, 490, 'garden.button.2'), function(){
			var data = UserData.questions.garden.buttons[0];

			if( self.groundOption != 0 ){
				alertify.message('Escolha outra opção!');
				return;
			}

			alertify.options({
				question: data.title,
				options: data.options,
				data: 'horta.arar',
				callback: function(){
					if( this.settings.option > 0 ){
						self.groundOption = 1;
						self.showBackButton = false;
						self.counter++;
					}
				}
			});
		});

		Quintal.onClick( game.add.sprite(600, 490, 'garden.button.3'), function(){
			var data = UserData.questions.garden.buttons[2];

			if( self.waterOption != 0 ){
				alertify.message('Escolha outra opção!');
				return;
			}

			alertify.options({
				question: data.title,
				options: data.options,
				data: 'horta.aguar',
				callback: function(){
					if( this.settings.option > 0 ){
						self.waterOption = this.settings.option;
						console.log(this.settings.option);
						self.showBackButton = false;
						self.counter++;
					}
				}
			});
		});

		this.showBackButton = true;
		HeaderState.create.call(this);

		alertify.message('Que tal dar uma aguada na horta?');
	},
	update: function(){
		if( this.waterOption == 1 ){
			this.water1.visible = false;
			this.water2.visible = true;
		} else if( this.waterOption == 2 ){
			this.water1.visible = true;
			this.water2.visible = false;
		} else {
			this.water1.visible = false;
			this.water2.visible = false;
		}

		if( this.groundOption == 1 ){
			this.ground1.visible = true;
			this.ground2.visible = false;
		} else {
			this.ground1.visible = false;
			this.ground2.visible = true;
		}

		if( this.plantOption == 3 ){
			this.plant1.visible = true;
			this.plant2.visible = false;
		} else if( this.plantOption == 2 ){
			this.plant1.visible = false;
			this.plant2.visible = true;
		} else {
			this.plant1.visible = false;
			this.plant2.visible = false;
		}

		if( this.counter >= 3 ){
			this.counter = 0;
			this.cronometer = true;
		}

		HeaderState.update.call(this);
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
