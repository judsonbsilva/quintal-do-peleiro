DB = {
	affix: 'quintal-game-',
	storage: window.localStorage,
	hasName: function(){
		return this.localStorage.hasOwnProperty(
			this.affix + 'name'
		);
	},
	saveName: function( name ){
		this.storage.setItem(this.affix + 'name', name);
	},
	resetAll: function(){
		this.storage.removeItem(this.affix + 'name');
	}
};