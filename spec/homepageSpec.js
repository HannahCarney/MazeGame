var Player = require('../js/player');


describe('By default', function(){
	var player
  
  beforeEach(function(){
  	player = new Player();
  });

  it('should have a starting point', function() {
    expect(player.begin).toBe("a1");
  });
});