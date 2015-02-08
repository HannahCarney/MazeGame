

var Player = function(){
  this.able = true
  this.place = "a1"
  this.grid = new Grid;
  this.am = ["a3"]
  this.move = [["a4","b3"],["a2"], ["a1"],["a10"],["b10"],["c10"],["d10"],["e10"],["f10"],["g10"],["h10"],["i10"],["j1"],["i1"],["h1"],["g1"],["f1"],["e1"],["d1"],["c1"],["b1"],["a3"],["a3"]]

};
Player.prototype.cantMove = function(input){
   if (this.am.contains(this.place)) {
     console.log("here")
  	 wall(input) }
   else {
    this.place = input
    console.log("there")
    return this.place
   }
};

function wall(input) {
  console.log("yo")
  console.log(player.place)
  console.log(player.am)
  var index = player.am.indexOf(player.place) 
  console.log(player.am.indexOf(player.place))
     if (player.move[index] == input || input === undefined || input.length > 4 || player.move[index].contains(input)) {
       player.able = false }
     else {
       player.place = input
       player.able = true
       return player.place }
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

