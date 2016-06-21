HeaderState = {
  create: function(){

    this.backButton = game.add.sprite(10,10,'header.back.button');

    Quintal.onClick(this.backButton, function(){
      game.state.start('home');
    });

    if( !this.showBackButton )
      this.backButton.visible = false;

    game.add.sprite(850,10,'header.back.button');

    this.moneyPoints = game.add.text(880, 90, Quintal.points.money,  {
			font: 'Bold 35px Arial',
			fill: '#ffffff',

		}).setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    game.add.sprite(750,10,'header.back.button');

    this.carrotPoints = game.add.text(780, 90, Quintal.points.carrots, {
			font: 'Bold 35px Arial',
			fill: '#ffffff',

		}).setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    game.add.sprite(650,10,'header.back.button');

    this.fruitPoints = game.add.text(680, 90, Quintal.points.fruits,  {
			font: 'Bold 35px Arial',
			fill: '#ffffff',

		}).setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    game.add.sprite(550,10,'header.back.button');

    this.eggPoints = game.add.text(580, 90, Quintal.points.eggs,  {
			font: 'Bold 35px Arial',
			fill: '#ffffff',

		}).setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
  },
  update: function(){
    this.fruitPoints.text = Quintal.points.fruits;
    this.eggPoints.text = Quintal.points.eggs;
    this.carrotPoints.text = Quintal.points.carrots;
    this.moneyPoints.text = Quintal.points.money;

    this.backButton.visible = this.showBackButton;
  }
}
