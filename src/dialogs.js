// Creating custom dialogs

if( alertify ) {
	alertify.prompt('Digite seu nome', 'fulano',function(evt, value){
		alertify.message('Bem vindo fazendeiro ' + value + '!');
	});
}

/*

if(!alertify.errorAlert){
	//define a new errorAlert base on alert
	alertify.dialog('errorAlert',function factory(){
		return {
			build:function(){
								var errorHeader = '<span class="fa fa-times-circle fa-2x" '
								+    'style="vertical-align:middle;color:#e10000;">'
								+ '</span> Application Error';
								this.setHeader(errorHeader);
						}
				};
		},true,'alert');
}
//launch it.
// since this was transient, we can launch another instance at the same time.
alertify
		.errorAlert("This is a none singleton modal error alert! <br/><br/><br/>" +
				"To show another error alert: " + 
			"<a href='javascript:alertify.errorAlert(\"Another error\");'> Click here </a>");
			*/