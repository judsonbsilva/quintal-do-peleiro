var gameWidth = 960,
	gameHeight = 640,
	game = new Phaser.Game(
		gameWidth,
		gameHeight,
		Phaser.AUTO,
		'root'
	);

Quintal = {
	loadSprite: function(spriteName, folder, file){
		var dir = 'assets/';

		if( !_.isString(file) ) dir += folder;
		else dir += folder + '/' + file;

		game.load.image(spriteName, dir);
	},
	changeState: function( name ){
		game.state.start( name );
	},
	sprites: {
		'home.farm': ['inicio', 'home-farm.png']
	}
};
