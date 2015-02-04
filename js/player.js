var Grid = require('./grid')

var Player = function(){
  this.place = "a1"
  this.grid = new Grid;
};



Player.prototype.moveRight = function(){
  return this.place = this.grid.map[this.grid.map.indexOf(this.place) + 1 ];
};

Player.prototype.moveLeft = function(){
  return this.place = this.grid.map[this.grid.map.indexOf(this.place) - 1 ];
};

Player.prototype.moveDown = function(){
  return this.place = this.grid.map[this.grid.map.indexOf(this.place) + this.grid.columns ];
};

Player.prototype.moveUp = function(){
  return this.place = this.grid.map[this.grid.map.indexOf(this.place) - this.grid.columns ];
};


module.exports = Player;