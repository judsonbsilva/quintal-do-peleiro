// Add and start the 'main' state to start the game
game.state.add('home', HomeState);
game.state.add('orchard', OrchardState);
game.state.start('orchard');