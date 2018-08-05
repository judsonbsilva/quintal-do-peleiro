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
            'basket.eggs.blue',
            'basket.eggs.green',
            'basket.eggs.orange',
            'basket.eggs.pink',
            'basket.eggs.purple',
            'basket.eggs.white'
        ]);

		game.load.spritesheet('timer', 'assets/outros/ampulheta-sprite.png', 207, 318, 3);
	},

	create: function(){
		// Set background image
		game.add.tileSprite(0, 0, gameWidth, gameHeight, 'farm.background');

		var self = this;

		this.options = [];

        this.combinations = [1,2,3]; //branca

        this.colors = [
          'white','blue','green','pink','orange','purple'
        ];


		this.counter = 0;
		this.bonus = 'eggs';
        this.timeCounted = 0;
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
            if( self.options.indexOf(1) == -1 ){
                self.options.push(1);
                self.foodOption = 2;
                self.showBackButton = false;
                self.counter++;
				alertify.message("Você ganhou 10 pontos!");
            }
	    });

		Quintal.onClick( game.add.sprite(430, 490, 'farm.button.2'), function(){
			if( self.options.indexOf(2) == -1){
                self.options.push(2);
                self.ledOption = 2;
                self.showBackButton = false;
                self.counter++;
                alertify.message("Você ganhou 10 pontos!");
            }
		});

		Quintal.onClick( game.add.sprite(600, 490, 'farm.button.3'), function(){
			if( self.options.indexOf(3) == -1){
                self.options.push(3);
				self.dirtOption = 1;
				self.showBackButton = false;
				self.counter++;
				alertify.message("Você ganhou 10 pontos!");
            }
        });

		game.add.sprite(600, 490, 'farm.button.3');

		this.showBackButton = true;
		HeaderState.create.call(this);
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

		HeaderState.update.call(this);

	},
	// Restart the game
	restartGame: function() {
		// Start the 'main' state, which restarts the game
		game.state.start('main');
	}
};
