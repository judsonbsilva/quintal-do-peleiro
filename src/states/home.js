var HomeState = {

	preload: function(){
		// Change the background color of the game
		game.stage.backgroundColor = '#159624';
		// Load sprites
		Quintal.loadSprites([
			'home.farm','home.orchard','home.garden','menu.background',
			'home.button.1','home.button.2','home.button.3', 'home.button.4',
			'header.back.button','header.eggs','header.carrots','header.fruits',
			'header.money'
		]);

	},

	create: function(){
		// Set background image
		//game.add.tileSprite(0, 0, gameWidth, gameHeight, 'farm-complete');

		var self = this;
		// Display the sprites on screen

		game.add.sprite(0, 237, 'home.garden');
		game.add.sprite(0, 0,   'home.farm');
		game.add.sprite(524, 0, 'home.orchard');


		game.add.sprite(220, 480, 'menu.background');
		this.orchard = game.add.sprite(260, 490, 'home.button.2');
		this.garden  = game.add.sprite(350, 510, 'home.button.1');
		this.farm    = game.add.sprite(480, 490, 'home.button.3');
        this.market  = game.add.sprite(600, 490, 'home.button.4');

        Quintal.onClick(this.market, function(){

            alertify.options({
                question: 'O que deseja vender?',
                options: [
                    { label: 'Frutas', value: 1 },
                    { label: 'Ovos', value: 2 },
                    { label: 'Cenouras', value: 3 }
                ],
                callback: function( value ){
                    if( value == 1 ){
                        var money = Quintal.conditions[ Quintal.condition ].fruits;

                        money *= Quintal.points.fruits;

                        Quintal.points.money += money;
                        Quintal.points.fruits = 0;

                        alertify.message('Você ganhou R$'+ money + ' pelas frutas');
                    } else if( value == 2 ){
                        var money = Quintal.conditions[ Quintal.condition ].eggs;

                        money *= Quintal.points.eggs;

                        Quintal.points.money += money;
                        Quintal.points.eggs = 0;

                        alertify.message('Você ganhou R$'+ money + ' pelos ovos');
                    } else if(value == 3){
                        var money = Quintal.conditions[ Quintal.condition ].carrots;

                        money *= Quintal.points.carrots;

                        Quintal.points.money += money;
                        Quintal.points.carrots = 0;

                        alertify.message('Você ganhou R$'+ money + ' pelas cenouras');
                    }
                }
            });

        /*
			var money = Quintal.points.eggs;

			money += Quintal.points.fruits;
			Quintal.points.fruits = 0;

			money += Quintal.points.carrots;
			Quintal.points.carrots = 0;

			Quintal.points.money += money;

			alertify.message("Você ganhou R$" + money + "!");

			if( Quintal.points.money >= 1000 ){

				var text = "Nome: " + UserData.storage.name + "<br/>";

				delete UserData.storage.name;
				delete UserData.storage.counter;

				_.each(UserData.storage, function( list, key ){
					var values = {1:0, 2:0, 3:0};
					_.each(list, function( number ){
						values[number]++;
					});

					text += "<h3>"+ key + "</h3><br/>";
					text += "1) " + values[1] + "<br/>";
					text += "2) " + values[2] + "<br/>"
					text += "3) " + values[3] + "<br/>"

				});


				alertify.alert('Fim', text, function(){
					try {
						var window = remote.getCurrentWindow();
						window.close();
					} catch(e){
						window.close();
					}
				});
			}
        */
		});



		this.orchard.inputEnabled = true;
		this.orchard.events.onInputDown.add(function(){
            self.incrementClick('orchard');
		}, this);

		this.farm.inputEnabled = true;
		this.farm.events.onInputDown.add(function(){
            self.incrementClick('farm');
		}, this);

		this.garden.inputEnabled = true;
		this.garden.events.onInputDown.add(function(){
            self.incrementClick('garden');
		}, this);

		HeaderState.create.call(this);
	},
    incrementClick: function( screen ){
        if( this.showMarket ) this.showMarket = false;

        Quintal.conditions[ Quintal.condition ][screen].clicks++;
        Quintal.totalClicks++;
        Quintal.conditionClicks.total++;
        Quintal.conditionClicks[screen]++;

        this.selectOption(screen);

        if( Quintal.totalClicks != 0 && Quintal.totalClicks % 3 == 0 ){
            this.showMarket = true;
			alertify.message('Venda seus produtos no mercado!');
		}
        if( Quintal.conditionClicks.total >= 10 ){

            var x = Quintal.conditionClicks.farm,
                y = Quintal.conditionClicks.garden,
                z = Quintal.conditionClicks.orchard,
                t = Quintal.conditionClicks.total;

            if( x/t >= 0.6 || y/t >= 0.6 || z/t >= 0.6 || x>= 10 || y >= 10 || z >= 10 ){
                this.showMarket = true;
				alertify.message('Venda seus produtos no mercado!');
                Quintal.conditionIndex += 1;

                if( Quintal.coditionIndex >= Quintal.conditions.order.length ){
                    alertify.message("ACABOU!", "FIM");
										return;
                }

                var index = Quintal.conditionIndex;
                Quintal.condition = Quintal.conditions.order[index];
                Quintal.conditionClicks.farm = 0;
                Quintal.conditionClicks.garden = 0;
                Quintal.conditionClicks.orchard = 0;
                Quintal.conditionClicks.total = 0;
            }
        }
    },
	update: function(){
		HeaderState.update.call(this);

        if( this.showMarket )
            this.market.visible = true;
        else
            this.market.visible = false;
	},
	selectOption: function( name ){
		game.state.start(name);
	},
	// Restart the game
	restartGame: function() {
		// Start the 'main' state, which restarts the game
		game.state.start('main');
	}
};
