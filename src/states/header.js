HeaderState = {
  create: function () {

    this.backButton = game.add.sprite(10, 10, 'header.back.button');

    Quintal.onClick(this.backButton, function () {
      game.state.start('home');
    });

    if (!this.showBackButton)
      this.backButton.visible = false;

    game.add.sprite(850, 10, 'header.money');

    this.moneyPoints = game.add.text(880, 70, Quintal.points.money, {
      font: 'Bold 35px Arial',
      fill: '#ffffff',

    }).setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    game.add.sprite(750, 10, 'header.carrots');

    this.carrotPoints = game.add.text(780, 70, Quintal.points.carrots, {
      font: 'Bold 35px Arial',
      fill: '#ffffff',

    }).setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    game.add.sprite(650, 10, 'header.fruits');

    this.fruitPoints = game.add.text(680, 70, Quintal.points.fruits, {
      font: 'Bold 35px Arial',
      fill: '#ffffff',

    }).setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    game.add.sprite(550, 10, 'header.eggs');

    this.eggPoints = game.add.text(580, 70, Quintal.points.eggs, {
      font: 'Bold 35px Arial',
      fill: '#ffffff',

    }).setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    this.cronometer = false;
    this.winner = false;

    this.timerImage = game.add.sprite(360, 100, 'timer');
    this.timerImage.animations.add('go');
    this.timerImage.animations.play('go', 5, true);
    this.timerImage.visible = false;

    this.timeText = game.add.text(450, 400, this.time - this.timeCounted, {
      font: 'Bold 35px Arial',
      fill: '#ffffff',
    }).setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    var self = this;

    game.time.events.loop(Phaser.Timer.SECOND, function () {
      HeaderState.updateCounter.call(self);
    }, this);

    game.add.text(900, 600, Quintal.condition, { font: 'Bold 12px Arial', fill: '#ffffff' });
  },
  update: function () {
    this.fruitPoints.text = Quintal.points.fruits;
    this.eggPoints.text = Quintal.points.eggs;
    this.carrotPoints.text = Quintal.points.carrots;
    this.moneyPoints.text = Quintal.points.money;

    this.backButton.visible = this.showBackButton;

    if (this.cronometer) {
      this.timerImage.visible = true;
      this.timeText.visible = true;
    } else {
      this.timerImage.visible = false;
      this.timeText.visible = false;
    }

    if (this.counter == 3) {
      this.counter = 0;
      this.cronometer = true;

      var self = this,
        colorIndex = -1;

      // Se a combinação vencedora for diferente das opções escolhidas
      if( JSON.stringify(this.combinations) == JSON.stringify(this.options) ){
        console.log('header.js > Estou aqui 2 ');
        console.log(this.options, this.combinations);

        var local = Quintal.sprites['basket.' + this.bonus + '.' + this.colors[0]];
        var image = "<br/><img src='assets/cestas/" + local[1] + "'/>";

        alertify.alert('Parabéns', '<h3>Você ganhou</h3>' + image);

        this.winner = true;
      } else {
          console.log('header.js > Estou aqui 1 ');
      }
    }
  },
  updateCounter: function () {
    if (!this.cronometer) return;

    this.timeCounted++;

    var condition = Quintal.conditions[Quintal.condition];

    var time = condition[game.state.current].time,
      points = condition[game.state.current].points;

    this.timeText.setText(time - this.timeCounted);

    if (this.timeCounted >= time) {
      this.cronometer = false;
      this.showBackButton = true;
      this.timeCounted = 0;

      if( this.winner ){
        Quintal.points[this.bonus] += points;
        Quintal.points.money += points;
        alertify.alert('Parabéns', '<h3>Você ganhou R$' + points );
        this.winner = false;
      } else {
        alertify.message('Você não ganhou nada!');
      }
      this.countQuestions = this.fruitOption = this.compostOption = this.groundOption = this.plantOption = this.waterOption = this.dirtOption = this.ledOption = this.foodOption = 0;
      game.state.start('home');
    }
  }
}
