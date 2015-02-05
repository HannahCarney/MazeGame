var Grid = require('./grid')

var Player = function(){
  this.place = "a7"
  this.grid = new Grid;
  this.am = ["a1", "a7"]
  this.move = ["a2", "a8"]

  //could I just make the walls small in front end? grid
};
Player.prototype.cantMove = function(input){
  var currentPosition = this.place
   if (this.am.contains(currentPosition)) {
  	 var index = this.am.indexOf(currentPosition) }
     if (this.move[index] == input) {
   	   return ("can't move there") }
     else if (input == undefined) {
  	   return "area limit" }
     else {
  	   this.place = input
  	   return this.place }
};

Player.prototype.moveRight = function(){
  var moveTo = (this.grid.map[this.grid.map.indexOf(this.place) + 1 ])
  return this.cantMove(moveTo);
};

Player.prototype.moveLeft = function(){
  var moveTo = (this.grid.map[this.grid.map.indexOf(this.place) - 1 ])
  return this.cantMove(moveTo);
};

Player.prototype.moveDown = function(){
  var moveTo = (this.cantMove(this.grid.map[this.grid.map.indexOf(this.place) + this.grid.columns ]))
  return this.cantMove(moveTo);
};

Player.prototype.moveUp = function(){
  var moveTo = (this.grid.map[this.grid.map.indexOf(this.place) - this.grid.columns ])
  return this.cantMove(moveTo);
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