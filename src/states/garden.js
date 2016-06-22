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
			'garden.side',		'garden.button.1',
			'garden.button.2',
			'garden.button.3',
			'header.back.button'
		]);
	},

	create: function(){
		// Set background image
		game.add.tileSprite(0, 0, gameWidth, gameHeight, 'garden.background');

		var self = this;

		this.groundOption = 0;
		this.ground1 = game.add.sprite(0,0,'garden.ground.2');
		this.ground2 = game.add.sprite(0,0,'garden.ground.1');

		this.waterOption = 0;
		this.water1 = game.add.sprite(0,0,'garden.water.1');
		this.water2 = game.add.sprite(0,0,'garden.water.2');

		this.plantOption = 0;
		this.plant1 = game.add.sprite(0,0,'garden.plant.1');
		this.plant2 = game.add.sprite(0,0,'garden.plant.2');


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
						self.plantOption = this.settings.option;
						self.showBackButton = false;
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
						self.groundOption = this.settings.option;
						self.showBackButton = false;
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
						self.showBackButton = false;
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
			this.water1.visible = true;
			this.water2.visible = false;
		} else if( this.waterOption == 2 ){
			this.water1.visible = false;
			this.water2.visible = true;
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

		if( this.plantOption == 1 ){
			this.plant1.visible = true;
			this.plant2.visible = false;
		} else if( this.plantOption == 2 ){
			this.plant1.visible = false;
			this.plant2.visible = true;
		} else {
			this.plant1.visible = false;
			this.plant2.visible = false;
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
