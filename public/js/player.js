

var Player = function(){
  this.able = true
  this.place = "a1"
  this.grid = new Grid;
  this.am = ["a1"]
  this.move = ["a2"]

};
Player.prototype.cantMove = function(input){
  var currentPosition = this.place
   if (this.am.contains(currentPosition)) {
  	 var index = this.am.indexOf(currentPosition) }
     if (this.move[index] == input) {
   	   console.log("can't move there")
       this.able = false }
     else if (input == undefined) {
  	   console.log("area limit")
       this.able = false }
     else {
  	   this.place = input
       this.able = true
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
