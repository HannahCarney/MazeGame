var Grid = require('./grid')

var Player = function(){
  this.place = "a1"
  this.grid = new Grid;
};



Player.prototype.moveRight = function(){
  return this.cantMove(this.place = this.grid.map[this.grid.map.indexOf(this.place) + 1 ]);
};

Player.prototype.moveLeft = function(){
  return this.cantMove(this.place = this.grid.map[this.grid.map.indexOf(this.place) - 1 ]);
};

Player.prototype.moveDown = function(){
  return this.cantMove(this.place = this.grid.map[this.grid.map.indexOf(this.place) + this.grid.columns ]);
};

Player.prototype.moveUp = function(){
  return this.cantMove(this.place = this.grid.map[this.grid.map.indexOf(this.place) - this.grid.columns ]);
};

Player.prototype.cantMove = function(input){
  // if (this.place == "a3"){
  // 	this.place = "a2" }
  if (input == undefined){
  	return ("error") }
  else if (input == "a3") {
  	return ("can't move there") }
};

module.exports = Player;