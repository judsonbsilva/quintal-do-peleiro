var FarmState = {

	preload: function(){
		// Load sprites
		Quintal.loadSprites([
			'farm.background',
			'farm.items',
			'farm.chickens',
			'farm.no.food',
			'farm.food.1',
			'farm.food.2',
			'farm.food.3',
			'farm.led.1',
			'farm.led.2',
			'farm.led.3',
			'farm.dirt',
			'menu.background',
			'farm.button.1',
			'farm.button.2',
			'farm.button.3',
			'header.back.button',
			'header.eggs',
			'header.carrots',
			'header.fruits',
			'header.money',
		]);

		game.load.spritesheet('timer', 'assets/outros/ampulheta-sprite.png', 207, 318, 3);
	},

	create: function(){
		// Set background image
		game.add.tileSprite(0, 0, gameWidth, gameHeight, 'farm.background');

		var self = this;

		this.time = 60;
		this.timeCounted = 0;
		this.points = 100;
		this.counter = 0;
		this.bonus = 'eggs';

		this.dirtOption = 0;

		this.farmDirt = game.add.sprite(200, 300, 'farm.dirt');

		this.ledOption = 0;

		this.led1 = game.add.sprite(250, 0, 'farm.led.1');
		this.led2 = game.add.sprite(250, 0, 'farm.led.2');
		this.led3 = game.add.sprite(150, 0, 'farm.led.3');

		this.foodOption = 0;

		this.food1 = game.add.sprite(500, 110, 'farm.food.1');
		this.food2 = game.add.sprite(500, 110, 'farm.food.2');
		this.food3 = game.add.sprite(500, 110, 'farm.food.3');
		this.food0 = game.add.sprite(500, 110, 'farm.no.food');

		game.add.sprite(250, 200, 'farm.chickens');
		game.add.sprite(  0, 110, 'farm.items');
		game.add.sprite(220, 480, 'menu.background');

		Quintal.onClick( game.add.sprite(250, 490, 'farm.button.1'), function(){
			self.foodOption = 2;
			self.showBackButton = false;
			self.counter++;
	    });

		Quintal.onClick( game.add.sprite(430, 490, 'farm.button.2'), function(){
			self.ledOption = 2;
			self.showBackButton = false;
			self.counter++;
		});

		Quintal.onClick( game.add.sprite(600, 490, 'farm.button.3'), function(){
			self.dirtOption = 1;
			self.showBackButton = false;
			self.counter++;
		});

		game.add.sprite(600, 490, 'farm.button.3');

		this.showBackButton = true;
		HeaderState.create.call(this);

		alertify.message('As galinhas parecem famintas');
	},
	update: function(){
		if( this.dirtOption == 1 )
			this.farmDirt.visible = false;
		else
			this.farmDirt.visible = true;

		if( this.ledOption == 1 ){
			this.led1.visible = false;
			this.led2.visible = true;
			this.led3.visible = false;
		} else if( this.ledOption == 2){
			this.led1.visible = true;
			this.led2.visible = false;
			this.led3.visible = false;
		} else if( this.ledOption == 3){
			this.led1.visible = false;
			this.led2.visible = false;
			this.led3.visible = true;
		} else {
			this.led1.visible = false;
			this.led2.visible = false;
			this.led3.visible = false;
		}

		if( this.foodOption == 1 ){
			this.food1.visible = false;
			this.food2.visible = true;
			this.food3.visible = false;
			this.food0.visible = false;
		} else if( this.foodOption == 2 ){
			this.food1.visible = true;
			this.food2.visible = false;
			this.food3.visible = false;
			this.food0.visible = false;
		} else if( this.foodOption == 3 ){
			this.food1.visible = false;
			this.food2.visible = false;
			this.food3.visible = true;
			this.food0.visible = false;
		} else {
			this.food1.visible = false;
			this.food2.visible = false;
			this.food3.visible = false;
			this.food0.visible = true;
		}

		if( this.counter >= 3 ){
			this.counter = 0;
			this.cronometer = true;
		}

		HeaderState.update.call(this);

	},
	// Restart the game
	restartGame: function() {
		// Start the 'main' state, which restarts the game
		game.state.start('main');
	}
};
