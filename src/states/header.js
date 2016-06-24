HeaderState = {
  create: function(){

    this.backButton = game.add.sprite(10,10,'header.back.button');

    Quintal.onClick(this.backButton, function(){
      game.state.start('home');
    });

    if( !this.showBackButton )
      this.backButton.visible = false;

    game.add.sprite(850,10,'header.money');

    this.moneyPoints = game.add.text(880, 70, Quintal.points.money,  {
			font: 'Bold 35px Arial',
			fill: '#ffffff',

		}).setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    game.add.sprite(750,10,'header.carrots');

    this.carrotPoints = game.add.text(780, 70, Quintal.points.carrots, {
			font: 'Bold 35px Arial',
			fill: '#ffffff',

		}).setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    game.add.sprite(650,10,'header.fruits');

    this.fruitPoints = game.add.text(680, 70, Quintal.points.fruits,  {
			font: 'Bold 35px Arial',
			fill: '#ffffff',

		}).setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    game.add.sprite(550,10,'header.eggs');

    this.eggPoints = game.add.text(580, 70, Quintal.points.eggs,  {
			font: 'Bold 35px Arial',
			fill: '#ffffff',

		}).setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    this.cronometer = false;

    this.timerImage = game.add.sprite(360, 100, 'timer');
    this.timerImage.animations.add('go');
    this.timerImage.animations.play('go', 5, true);
    this.timerImage.visible = false;

    this.timeText = game.add.text(450, 400, this.time - this.timeCounted,  {
			font: 'Bold 35px Arial',
			fill: '#ffffff',
		}).setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    var self = this;
    game.time.events.loop(Phaser.Timer.SECOND, function(){
        HeaderState.updateCounter.call(self);
    }, this);
  },
  update: function(){
    this.fruitPoints.text = Quintal.points.fruits;
    this.eggPoints.text = Quintal.points.eggs;
    this.carrotPoints.text = Quintal.points.carrots;
    this.moneyPoints.text = Quintal.points.money;

    this.backButton.visible = this.showBackButton;

    if( this.cronometer ){
      this.timerImage.visible = true;
      this.timeText.visible = true;
    } else {
      this.timerImage.visible = false;
      this.timeText.visible   = false;
    }

		if( this.counter == 3 ){
			this.counter = 0;
			this.cronometer = true;
		}
  },
  updateCounter: function(){
    if( !this.cronometer ) return;

    this.timeCounted++;
    this.timeText.setText( this.time - this.timeCounted );

  	if( this.timeCounted >= this.time ){
      this.cronometer = false;
      this.showBackButton = true;
      this.timeCounted = 0;
      Quintal.points[this.bonus] += this.points;
      alertify.message('Você ganhou ' + this.points + '!');

      this.countQuestions = this.fruitOption = this.compostOption = this.groundOption = this.plantOption = this.waterOption = this.dirtOption = this.ledOption = this.foodOption = 0;
    }
  }
}
