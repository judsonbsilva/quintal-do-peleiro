// Creating custom dialogs

alertify.defaults.glossary.title = 'Quintal do Peleiro';
alertify.defaults.glossary.ok ='Confirmar';
alertify.defaults.glossary.cancel = 'Cancelar';

if( !alertify.options ){
	//define a new errorAlert base on alert
	alertify.dialog('options', function factory(){
		var dialogOptions;
		return {
			main:function(params){
				this.settings = _.extend({
					question:'Qual a sua pergunta?',
					options: [
						{ label: 'Opção 1', value: 1 },
						{ label: 'Opção 2', value: 2 },
						{ label: 'Opção 3', value: 3 }
					],
					data: 'dataName',
					callback: function(){
						console.log(this, arguments);
					},
					option: -1
				}, params);
			},
			setup:function(){
				return {
					buttons:[
						{
							text: 'OK',
							key: 13,
							invokeOnClose: true,
							className: alertify.defaults.theme.ok,
							attrs:{ attribute:'value' }
						},
						{
							text: 'Cancelar',
							key: 27,
							className: alertify.defaults.theme.cancel,
							attrs:{ attribute:'value' }
						}
					],
					focus:{
						element: 0,
						select: false
					},
					options: {
						movable: false,
						resizable: false,
						closable: false,
						maximizable: false
					}
				};
		 	},
			build:function(){
					console.log(this);
					var self = this;
					$(this.elements.content).on('click', 'input', function(){
						UserData.set(this.name, this.value);
						self.settings.option = this.value/10;
					});
			},
			prepare: function(){

				var self = this,
					content = $(document.createElement('div'));

				self.setHeader(self.settings.question);

				_.each( self.settings.options, function(obj, index){
					var $input = $(document.createElement('input')),
							$span = $(document.createElement('span'));

					$input.attr('type', 'radio');
					$input.attr('name',self.settings.data);
					$input.attr('value', obj.value);
					$input.attr('class','radio-input');

					$span.attr('class','radio-label');
					$span.text(obj.label);

					content.append($input);
					content.append($span);
					content.append(document.createElement('br'));
				});

				self.setContent(content.get(0));
			},
			callback:function(closeEvent){
				var dataName = this.settings.data,
						data = Number( UserData.get( dataName ));
						
				this.settings.callback.call( this );
				//The closeEvent has the following properties
				//
				// index: The index of the button triggering the event.
				// button: The button definition object.
				// cancel: When set true, prevent the dialog from closing.
			},
			// To make use of AlertifyJS settings API, group your custom settings into a settings object.
			//settings: {,
			// AlertifyJS will invoke this each time a settings value gets updated.
			settingUpdated:function(key, oldValue, newValue){
				// Use this to respond to specific setting updates.
				switch(key){
					case 'myProp':
					// Do something when 'myProp' changes
					break;
				}
			},
			// listen to internal dialog events.
			hooks:{
				// triggered when the dialog is shown, this is seperate from user defined onshow
				onshow: function(){
				},
				// triggered when the dialog is closed, this is seperate from user defined onclose
				onclose: function(){
				},
				// triggered when a dialog option gets updated.
				// IMPORTANT: This will not be triggered for dialog custom settings updates ( use settingUpdated instead).
				onupdate: function(){
				}
			}
		}
	});
}


if( !UserData.hasName() ) {

	alertify.prompt('Digite seu nome').setting({
		closable: false,
		maximizable: false,
		frameless: true
	}).set('onok',function(event, value){
		UserData.saveName(value);
		alertify.message('Bem vindo fazendeiro ' + value + '!');
		alertify.message('Clique nos botões do menu e se divirta');
	});
	/*
	alertify.options({
		question: 'TESTEEEE',
		options: [
			{ value: 'TESSSSS', label:"@$@#%$@#%$" },
			{ value: '53@@#F@#F', label: "f23f234f23f"}
		],
		data: 'test'
	}).set('onok', function(){
		console.log("Deuuuu");
		alertify.message("Deu certo!");
	});
	*/
}
