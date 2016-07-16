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
			'menu.background',
      'basket.carrots.blue',
      'basket.carrots.black',
      'basket.carrots.green',
      'basket.carrots.orange',
      'basket.carrots.pink',
      'basket.carrots.yellow'
		]);

		game.load.spritesheet('timer', 'assets/outros/ampulheta-sprite.png', 207, 318, 3);
	},

	create: function(){
		// Set background image
		game.add.tileSprite(0, 0, gameWidth, gameHeight, 'garden.background');

		var self = this;

    this.options = [];

    this.combinations = [
            [1,2,3], //laranja
            [1,3,2], //verde
            [2,3,1], //amarelo
            [2,1,3], //preto
            [3,1,2], //rosa
            [3,2,1]  //azul
    ];
    this.colors = ['orange','green','yellow','black','pink','blue'];
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
            if( self.options.indexOf(1) == -1 ){
                self.options.push(1);
                self.plantOption = 2;
                self.showBackButton = false;
                self.counter++;
								alertify.message("Você ganhou " + self.counter * 10 + " pontos!");
            }
		});


		Quintal.onClick( game.add.sprite(430, 490, 'garden.button.2'), function(){
            if( self.options.indexOf(2) == -1 ){
                self.options.push(2);
                self.groundOption = 1;
                self.showBackButton = false;
                self.counter++;
								alertify.message("Você ganhou " + self.counter * 10 + " pontos!");
            }
		});

		Quintal.onClick( game.add.sprite(600, 490, 'garden.button.3'), function(){
            if( self.options.indexOf(3) == -1 ){
                self.options.push(3);
                self.waterOption = 1;
                self.showBackButton = false;
                self.counter++;
								alertify.message("Você ganhou " + self.counter * 10 + " pontos!");
            }
        });

		this.showBackButton = true;
		HeaderState.create.call(this);
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
