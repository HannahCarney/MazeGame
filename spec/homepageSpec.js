var Player = require('../js/player');
var Path = require('../js/path');


describe('By default', function(){
	var player
  var path
  
  beforeEach(function(){
  	player = new Player();
    path = new Path();
  });

  it('should have a starting point', function() {
    expect(player.begin).toBe("a1");
  });

  it('should have a path', function(){
    expect(path.grid).toContain("b2");
  });
});