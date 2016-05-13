UserData = {
	affix: 'quintal-game-',
	storage: {},
	hasName: function(){
		return this.storage.hasOwnProperty(
			this.affix + 'name'
		);
	},
	saveName: function( name ){
		this.storage[this.affix + 'name'] = name;
	},
	resetAll: function(){
		this.storage = {};
	},
	questions: {
	  farm: {
	    screen: 'Granja',
	    buttons: [
	      {
	        title: 'Alimentos',
	        options:[
	          { name: 'Restos de Alimentos', points: 30},
						{ name: 'Milho Orgânico', points: 20 },
						{ name: 'Ração', points: 10 },
	        ]
	      },
	      {
	        title: 'Limpeza',
	        options:[
						{ name: 'Mangueiras', points: 10 },
	          { name: 'Água Encanada (Baldes)', points: 20 },
	          { name: 'Água de Poço', points: 30 }
	        ]
	      },
	      {
	        title: 'Luminosidade',
	        options: [
	          { name: 'Natural', points: 30 },
	          { name: 'Fluorescente', points: 20 },
	          { name: 'Incandescente', points: 10 }
	        ]
	      }
	    ]
	  },
	  garden: {
	    screen: 'Pomar',
	    buttons: [
	      {
	        title: 'Podar',
	        options: [
	          { name: 'Lateral', points: 30 },
	          { name: 'Copa', points: 20 },
	          { name: 'Todas as opções', points: 10 }
	        ]
	      },
	      {
	        title: 'Adubar',
	        options: [
	          { name: 'Orgânico', points: 30 },
	          { name: 'Mineral', points: 20 },
	          { name: 'Químico', points: 10 }
	        ]
	      },
	      {
	        title: 'Pesticidas',
	        options:[
		        { name: 'Sintéticos', points: 20 },
		        { name: 'Vegetal', points: 30 },
		        { name: 'Inorgânicos', points: 10 }
	        ]
	      }
	    ]
	  },
	  orchard: {
	    screen: 'Horta',
	    buttons: [
	      {
	        title: 'Arar',
	        options:
	        [
	          { name: 'Tratores', points: 10 },
	          { name: 'Animais', points: 20 },
	          { name: 'Manual', points: 30 }
	        ]
	      },
	      {
	        title: 'Plantar',
	        options: [
	          { name: 'Sementes', points: 30 },
	          { name: 'Mudas Prontas', points: 20 }
	        ]
	      },
	      {
	        title: 'Irrigar',
	        options: [
	          { name: 'Manual', points: 30 },
	          { name: 'Sistema de Irrigação', points: 20 },
	          { name: 'Encanado', points: 10 }
	        ]
	      }
	    ]
	  }
	}
};
