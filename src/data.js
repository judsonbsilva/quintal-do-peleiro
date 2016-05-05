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
	}
};