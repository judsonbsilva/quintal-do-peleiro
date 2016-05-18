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
	onClick: function( element, action){
		element.inputEnabled = true;
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
	sprites: {
		'home.farm': ['inicio', 'home-farm.png']
	}
};
