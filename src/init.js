var gameWidth = 960,
	gameHeight = 640,
	game = new Phaser.Game(
		gameWidth,
		gameHeight,
		Phaser.AUTO,
		'root'
	);

Quintal = {
	loadAssets: function(spriteName, folder, file){
		var dir = 'assets/';

		if( !_.isString(file) ) dir += folder;
		else dir += folder + '/' + file;

		console.log(dir);

		if( _.isString(spriteName) && _.isString(name) && _.isString(file) )
			game.load.image(spriteName, dir);
	}
}
