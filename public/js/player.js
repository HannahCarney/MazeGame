

var Player = function(){
  this.able = true
  this.place = "a1"
  this.grid = new Grid;
  this.am = [   "a1",  "a2",     "a3",    "a4",  "a5",  "a6",  "a7",  "a8",  "a9",  "a10", "b2",   "b3",        "b4",        "b5",       "b6",     "b7",        "b8",      "b9",  "b10", "c1",     "c2",         "c3",      "c4",         "c5",      "c6",      "c7",      "c8",          "c9",        "c10",     "d1",   "d2"]
  this.move = [["a2"],["a1"],["a4","b3"],["a3"],["a6"],["a5"],["b7"],["a9"],["a8"],["b1"],["b3"],["a3","b2"],["c4","b5"],["b4","b6"],["b5","c6"],["a7","b8"],["b7","c8"],["b10"],["c1"], ["c2"],["c1","c3","d2"],["c2"],["c5","d4","b4"],["c4","c6"],["b6","c5"],["c8"],["c7","b8","d8"],["b9","c10"],["c9","d1"],["e1"],["c2","d3"]]

};

Player.prototype.cantMove = function(input){
   if (this.am.contains(this.place)) {
     console.log("here")
  	 this.wall(input) }
   else if (this.am.contains(this.place) == false) {
    this.place = input
    this.able = true
    console.log("moves")
   }
   return this.place
};

Player.prototype.wall = function(input) {
  console.log("yo")
  console.log(this.place)
  console.log(this.am)
  var index = this.am.indexOf(this.place) 
  console.log(this.am.indexOf(this.place))
  console.log(input)
     if (this.move[index].contains(input) == true || input === undefined || input.length > 4 ){
       this.able = false 
       console.log("stays put") }
     else {
       console.log(input)
       this.place = input
       console.log(this.place)
       this.able = true
       console.log("goes there")
    }
    return this.place
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
  var moveTo = (this.grid.map[this.grid.map.indexOf(this.place) + this.grid.columns ])
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

