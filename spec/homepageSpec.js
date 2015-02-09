var Player = require('../public/js/player');
var Grid = require('../public/js/grid');


describe('By default', function(){
	var player
  
  beforeEach(function(){
  	player = new Player();
    grid = new Grid();
  });

  it('should have a starting point', function() {
    expect(player.place).toBe("a7");
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
  	player.moveLeft();
    player.moveRight();
    expect(player.place).toBe("a7");
  })

  it('should be able to move left', function(){
    player.moveLeft();
    expect(player.place).toBe("a6");
  });

  it('should be able to move down', function(){
  	player.moveDown();
  	expect(player.place).toBe("b7");
  });

  it('should be able to move up', function(){
  	player.moveDown();
  	expect(player.place).toBe("b7");
  	player.moveUp();
  	expect(player.place).toBe("a7")
  });

  it('should be able to move down then right', function(){
  	player.moveDown();
  	player.moveRight();
  	expect(player.place).toBe("b8")
  });
});

describe('grid properties', function(){

  beforeEach(function(){
  	player = new Player();
    grid = new Grid();
  });

  it('player should not be able to walk off the grid', function(){
    expect(player.moveUp()).toBe("area limit");
   });

   it('player should not be able to walk into wall', function(){
  	expect(player.moveRight()).toBe("can't move there");
  });

});