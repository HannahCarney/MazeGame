var Grid = require('./grid')

var Player = function(){
  this.place = "a7"
  this.grid = new Grid;
  this.am = ["a1"]
  this.move = ["a2"]

  //could I just make the walls small in front end? grid
};
Player.prototype.move = function(input){
  if (this.am.contains(this.place)) {
  	var index = this.am.indexOf(this.place)
    var wall = this.move[index]
   	  this.cantMove(wall) }
  else if (input == undefined) {
  	return "error"
  }
};


Player.prototype.moveRight = function(){
  return this.move(this.place = this.grid.map[this.grid.map.indexOf(this.place) + 1 ]);
};

Player.prototype.moveLeft = function(){
  return this.move(this.place = this.grid.map[this.grid.map.indexOf(this.place) - 1 ]);
};

Player.prototype.moveDown = function(){
  return this.move(this.place = this.grid.map[this.grid.map.indexOf(this.place) + this.grid.columns ]);
};

Player.prototype.moveUp = function(){
  return this.move(this.place = this.grid.map[this.grid.map.indexOf(this.place) - this.grid.columns ]);
};

Player.prototype.cantMove = function(input){
  return ("can't move there")
};

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

module.exports = Player;