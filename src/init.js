var gameWidth = 960,
	gameHeight = 640,
	game = new Phaser.Game(
		gameWidth,
		gameHeight,
		Phaser.AUTO,
		'root'
	);

Quintal = {
	loadSprites: function(spriteNames ){
		for( var i = 0, to = spriteNames.length; i < to; i++ ){
			if( !this.sprites.hasOwnProperty( spriteNames[i] ) )
				throw new Error('Sprite não encontrado '+ spriteNames[i] );
			else {
				var args = this.sprites[ spriteNames[i] ].slice().reverse();
				args.push( spriteNames[i] );
				this._loadSprite.apply( this,  args.reverse() );
			}
		}
	},
	_loadSprite: function(spriteName, folder, file){
		var dir = 'assets/';

		if( _.isString(file) ) dir += folder + '/' + file;
		else dir += folder;

		console.log('Load: ' + spriteName, dir);
		game.load.image(spriteName, dir);
	},
	changeState: function( name ){
		game.state.start( name );
	},
	onClick: function( element, action){
		element.inputEnabled = true;
		if( !element.events ) return;
		element.events.onInputDown.add(function(){
			action.call(this, element);
		}, this);
	},
	buttonAction:function(element, dataName, data, message){
		Quintal.onClick(element, function(){

			if( !UserData.has(dataName) ){
				var question = data;

				alertify.options({
					question: question.title,
					options: question.options,
					data: dataName
				});

			} else alertify.message(message);
		});
	},
	points: {
		eggs: 0,
		fruits: 0,
		carrots: 0,
		money: 0
	},
    conditionClicks: {
        total: 0,
        garden: 0,
        farm: 0,
        orchard: 0
    },
    totalClicks: 0,
    conditionIndex: 0,
    condition: 'A',
    conditions: {
        order: ['A','B','C','D'],
        A: {
            orchard: {
                time: 20,
				points: 40,
                clicks: 0
			},
			garden: {
                time: 20,
                points: 40,
                clicks: 0
            },
            farm: {
                time: 20,
				points: 40,
                clicks: 0
            },
            carrots: 1,
            fruits: 1,
            eggs: 3
        },
        B: {
			
            orchard: {
                time: 20,
                points: 40,
                clicks: 0
            },
            garden: {
                time: 40,
                points: 80,
                clicks: 0
            },
            farm: {
                time: 60,
                points: 120,
                clicks: 0
            },
            carrots: 1,
            fruits: 3,
            eggs: 1
        },
        C: {
			orchard: {
                time: 40,
                points: 80,
                clicks: 0
            },
            garden: {
                time: 60,
                points: 120,
                clicks: 0
            },
            farm: {
                time: 20,
                points: 40,
                clicks: 0
            },
            
            carrots: 3,
            fruits: 1,
            eggs: 1
		},
		D: {
            orchard: {
                time: 60,
                points: 120,
                clicks: 0
            },
            garden: {
                time: 20,
                points: 40,
                clicks: 0
            },
            farm: {
                time: 40,
                points: 80,
                clicks: 0
            },
            carrots: 3,
            fruits: 1,
            eggs: 1
		},
		
    },
	sprites: {
		'header.back.button': ['outros', 'voltar.png'],
		'header.eggs':        ['outros', 'ovos.png'],
		'header.carrots':     ['outros', 'cenoura.png'],
		'header.fruits':      ['outros', 'frutas.png'],
		'header.money':       ['outros', 'moeda.png'],

		'menu.background':    ['menu-background.png'],

		'home.farm':       ['inicio', 'home-farm.png'],
		'home.orchard':    ['inicio', 'home-orchard.png'],
		'home.garden':     ['inicio', 'home-garden.png'],
		'home.button.1':   ['inicio', 'button-1.png'],
		'home.button.2':   ['inicio', 'button-2.png'],
		'home.button.3':   ['inicio', 'button-3.png'],
		'home.button.4':   ['inicio', 'button-4.png'],

		'farm.background': ['granja', 'background.png'],
		'farm.items':      ['granja', 'items.png'],
		'farm.chickens':   ['granja', 'chickens.png'],
		'farm.no.food':    ['granja', 'food0.png'],
		'farm.food.1':     ['granja', 'food1.png'],
		'farm.food.2':     ['granja', 'food2.png'],
		'farm.food.3':     ['granja', 'food3.png'],
		'farm.led.1':      ['granja', 'led1.png'],
		'farm.led.2':      ['granja', 'led2.png'],
		'farm.led.3':      ['granja', 'led3.png'],
		'farm.dirt':       ['granja', 'sujeira.png'],
		'farm.button.1':   ['granja', 'button-1.png'],
		'farm.button.2':   ['granja', 'button-2.png'],
		'farm.button.3':   ['granja', 'button-3.png'],

		'orchard.background': ['pomar','background.png'],
		'orchard.trees':      ['pomar','trees.png'],
		'orchard.tree.side':  ['pomar','tree-side.png'],
		'orchard.tree.top':   ['pomar','tree-top.png'],
		'orchard.good.fruit': ['pomar','fruit.png'],
		'orchard.bad.fruit':  ['pomar','fruit-bad.png'],

		'orchard.compost.1':   ['pomar', 'compost1.png'],
		'orchard.compost.2':   ['pomar', 'compost2.png'],
		'orchard.compost.3':   ['pomar', 'compost3.png'],

		'orchard.button.1':   ['pomar', 'button-1.png'],
		'orchard.button.2':   ['pomar', 'button-2.png'],
		'orchard.button.3':   ['pomar', 'button-3.png'],

		'garden.background': ['horta','background.png'],
		'garden.water.1':    ['horta','water1.png'],
		'garden.water.2':    ['horta','water2.png'],
		'garden.plant.1':    ['horta','plant1.png'],
		'garden.plant.2':    ['horta','plant2.png'],
		'garden.ground.1':   ['horta','ground1.png'],
		'garden.ground.2':   ['horta','ground2.png'],
		'garden.side':       ['horta','side.png'],
		'garden.button.1':   ['horta','button-1.png'],
		'garden.button.2':   ['horta','button-2.png'],
		'garden.button.3':   ['horta','button-3.png'],

		'basket.carrots.blue'  : ['cestas', 'carrots-blue.png'],
        'basket.carrots.black' : ['cestas', 'carrots-black.png'],
		'basket.carrots.green' : ['cestas', 'carrots-green.png'],
		'basket.carrots.orange': ['cestas', 'carrots-orange.png'],
		'basket.carrots.pink'  : ['cestas', 'carrots-pink.png'],
		'basket.carrots.yellow': ['cestas', 'carrots-yellow.png'],

		'basket.eggs.blue'  : ['cestas', 'eggs-blue.png'],
		'basket.eggs.green' : ['cestas', 'eggs-green.png'],
		'basket.eggs.orange': ['cestas', 'eggs-orange.png'],
		'basket.eggs.pink'  : ['cestas', 'eggs-pink.png'],
		'basket.eggs.purple': ['cestas', 'eggs-purple.png'],
		'basket.eggs.white' : ['cestas', 'eggs-white.png'],

		'basket.fruits.green' : ['cestas', 'fruits-green.png'],
		'basket.fruits.orange': ['cestas', 'fruits-orange.png'],
		'basket.fruits.pink'  : ['cestas', 'fruits-pink.png'],
		'basket.fruits.purple': ['cestas', 'fruits-purple.png'],
		'basket.fruits.red'   : ['cestas', 'fruits-red.png'],
		'basket.fruits.yellow': ['cestas', 'fruits-yellow.png']
	}
};
