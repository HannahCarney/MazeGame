

var Player = function(){
  this.able = true
  this.place = "a1"
  this.grid = new Grid;
  this.am = ["a1", "a2","b1","c1","d1","e1","f1","g1","h1","i1","j1","i10","h10","g10","f10","e10","d10","c10","b10","a10"]
  this.move = ["a2", "a1","a10","b10","c10","d10","e10","f10","g10","h10","i10","j1","i1","h1","g1","f1","e1","d1","c1","b1"]

};
Player.prototype.cantMove = function(input){
  var currentPosition = this.place
   if (this.am.contains(currentPosition)) {
  	 var index = this.am.indexOf(currentPosition) }
     if (this.move[index] == input || input === undefined || input.length > 4) {
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

Array.prototype.contains = function(k) {
  for(var i=0; i < this.length; i++){
    if(this[i] === k){
      return true;
    }
  }
  return false;
}

