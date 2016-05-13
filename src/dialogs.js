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
					data: 'dataName'
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
			// This will be called once the dialog DOM has been created, just before its added to the document.
			// Its invoked only once.
			build:function(){

					// Do custom DOM manipulation here, accessible via this.elements

					// this.elements.root           ==> Root div
					// this.elements.dimmer         ==> Modal dimmer div
					// this.elements.modal          ==> Modal div (dialog wrapper)
					// this.elements.dialog         ==> Dialog div
					// this.elements.reset          ==> Array containing the tab reset anchor links
					// this.elements.reset[0]       ==> First reset element (button).
					// this.elements.reset[1]       ==> Second reset element (button).
					// this.elements.header         ==> Dialog header div
					$(this.elements.content).on('click', 'input', function(){
						console.log(this, arguments);
					});


					// this.elements.footer         ==> Dialog footer div
					// this.elements.resizeHandle   ==> Dialog rezie handle div

					// Dialog commands (Pin/Maximize/Close)
					// this.elements.commands           ==> Object conatining dialog command buttons references
					// this.elements.commands.container ==> Root commands div
					// this.elements.commands.pin       ==> Pin command button
					// this.elements.commands.maximize  ==> Maximize command button
					// this.elements.commands.close     ==> Close command button

					// Dialog action buttons (Ok, cancel ... etc)
					// this.elements.buttons                ==>  Object conatining dialog action buttons references
					// this.elements.buttons.primary        ==>  Primary buttons div
					// this.elements.buttons.auxiliary      ==>  Auxiliary buttons div

					// Each created button will be saved with the button definition inside buttons collection
					// this.__internal.buttons[x].element

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

				console.log(content.get(0));
				self.setContent(content.get(0));
			},
			callback:function(closeEvent){

				console.log("aqui powrraaa", arguments);
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
	/*
	alertify.prompt('Digite seu nome').setting({
		closable: false,
		maximizable: false,
		frameless: true
	}).set('onok',function(event, value){
		UserData.saveName(value);
		alertify.message('Bem vindo fazendeiro ' + value + '!');
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
	});
	*/
}
