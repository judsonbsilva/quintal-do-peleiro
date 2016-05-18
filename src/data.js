UserData = {
	affix: 'quintal-game-',
	storage: { counter: 0 },
	hasName: function(){
		return this.storage.hasOwnProperty('name');
	},
	saveName: function( name ){
		this.storage['name'] = name;
	},
	set: function( key, value ){
		this.storage[key] = value;
	},
	get: function( key ){
		if( this.has(key) )
			return this.storage[key];
	},
	has: function( key ){
		return this.storage.hasOwnProperty( key );
	},
	resetAll: function(){
		this.storage = {};
	},
	questions: {
	  farm: {
	    screen: 'Granja',
	    buttons: [
	      {
					number: 1,
	        title: 'Alimentos',
	        options:[
	          { label: 'Restos de Alimentos', value: 30},
						{ label: 'Milho Orgânico', value: 20 },
						{ label: 'Ração', value: 10 },
	        ]
	      },
	      {
	        title: 'Limpeza',
	        options:[
						{ label: 'Mangueiras', value: 10 },
	          { label: 'Água Encanada (Baldes)', value: 20 },
	          { label: 'Água de Poço', value: 30 }
	        ]
	      },
	      {
	        title: 'Luminosidade',
	        options: [
	          { label: 'Natural', value: 30 },
	          { label: 'Fluorescente', value: 20 },
	          { label: 'Incandescente', value: 10 }
	        ]
	      }
	    ]
	  },
	  orchard: {
	    screen: 'Pomar',
	    buttons: [
	      {
	        title: 'Podar',
	        options: [
	          { label: 'Lateral', value: 30 },
	          { label: 'Copa', value: 20 },
	          { label: 'Todas as opções', value: 10 }
	        ]
	      },
	      {
	        title: 'Adubar',
	        options: [
	          { label: 'Orgânico', value: 30 },
	          { label: 'Mineral', value: 20 },
	          { label: 'Químico', value: 10 }
	        ]
	      },
	      {
	        title: 'Pesticidas',
	        options:[
		        { label: 'Sintéticos', value: 20 },
		        { label: 'Vegetal', value: 30 },
		        { label: 'Inorgânicos', value: 10 }
	        ]
	      }
	    ]
	  },
	  garden: {
	    screen: 'Horta',
	    buttons: [
	      {
	        title: 'Arar',
	        options:
	        [
	          { label: 'Tratores', value: 10 },
	          { label: 'Animais', value: 20 },
	          { label: 'Manual', value: 30 }
	        ]
	      },
	      {
	        title: 'Plantar',
	        options: [
	          { label: 'Sementes', value: 30 },
	          { label: 'Mudas Prontas', value: 20 }
	        ]
	      },
	      {
	        title: 'Irrigar',
	        options: [
	          { label: 'Manual', value: 30 },
	          { label: 'Sistema de Irrigação', value: 20 },
	          { label: 'Encanado', value: 10 }
	        ]
	      }
	    ]
	  }
	}
};
