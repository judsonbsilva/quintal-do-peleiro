// Creating custom dialogs

alertify.defaults.glossary.title = 'Quintal do Peleiro';
alertify.defaults.glossary.ok ='Confirmar';
alertify.defaults.glossary.cancel = 'Cancelar';

if( !UserData.hasName() ) {
	
	alertify.prompt('Digite seu nome', 'fulano',function(evt, value){
		UserData.saveName(value);
		alertify.message('Bem vindo fazendeiro ' + value + '!');
	});
}

if( !alertify.options ){
	//define a new errorAlert base on alert
	alertify.dialog('options', function factory(){
		var dialogOptions;
		return {
			main:function(params){
				dialogOptions = params;
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
						/* the element to receive default focus, has differnt meaning based on value type:
							number:     action button index.
							string:     querySelector to select from dialog body contents.
							function:   when invoked, should return the focus element.
							DOMElement: the focus element.
							object:     an object that implements .focus() and .select() functions. 
						*/
						element: 0,
						/* indicates if the element should be selected on focus or not*/
						select: false
					},
					options: {
						title: dialogOptions.title,
						movable: false,
						resizable: false
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
					var content = "";
					_.each(dialogOptions.options, function(obj, index){
						console.log("AHA");
						content += obj.value + "<br/>";
					});

					this.elements.content = content;


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
			 // This will be called each time the dialog is shown
				 prepare:function(){
						 // Do stuff that should be done every time the dialog is shown.
				 },
				 // This will be called each time an action button is clicked.
				 callback:function(closeEvent){
						//The closeEvent has the following properties
						//
						// index: The index of the button triggering the event.
						// button: The button definition object.
						// cancel: When set true, prevent the dialog from closing.
				 },
				 // To make use of AlertifyJS settings API, group your custom settings into a settings object.
				 settings:{
						myProp:'value'
				 },
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