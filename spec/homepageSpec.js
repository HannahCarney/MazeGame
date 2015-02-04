var Player = require('../js/player');
var Grid = require('../js/grid');


describe('By default', function(){
	var player
  
  beforeEach(function(){
  	player = new Player();
    grid = new Grid();
  });

  it('should have a starting point', function() {
    expect(player.place).toBe("a1");
  });

  it('should have a path', function(){
    expect(grid.map).toContain("b2");
  });
});

describe('player movements', function(){

  beforeEach(function(){
    player = new Player();
    grid = new Grid();
  });

  it('should be able to move right', function(){
    player.moveRight();
    expect(player.place).toBe("a2");
  })

  it('should be able to move left', function(){
    player.moveRight();
    expect(player.place).toBe("a2");
    player.moveLeft();
    expect(player.place).toBe("a1");
  });

  it('should be able to move down', function(){
  	player.moveDown();
  	expect(player.place).toBe("b1");
  });

  it('should be able to move up', function(){
  	player.moveDown();
  	expect(player.place).toBe("b1");
  	player.moveUp();
  	expect(player.place).toBe("a1")
  });

  it('should be able to move down then right', function(){
  	player.moveDown();
  	player.moveRight();
  	expect(player.place).toBe("b2")
  });


});

describe('grid properties', function(){

  beforeEach(function(){
  	player = new Player();
    grid = new Grid();
  });

  it('player should not be able to walk off the grid', function(){
    expect(player.moveLeft()).toBe("error");
   });

  it('player should not be able to walk into wall', function(){
    player.moveRight();
  	expect(player.moveRight()).toBe("can't move there");
  });

});