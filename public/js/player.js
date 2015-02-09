

var Player = function(){
  this.keyHave = false
  this.hasWon = false
  this.able = true
  this.place = "a1"
  this.grid = new Grid;
  this.am = [   "a1",  "a2",     "a3",    "a4",  "a5",  "a6",  "a7",  "a8",  "a9",  "a10", "b1",    "b2",   "b3",        "b4",        "b5",       "b6",     "b7",        "b8",      "b9",         "b10",     "c1",         "c2",         "c3",      "c4",         "c5",         "c6",    "c7",      "c8",          "c9",        "c10",       "d1",        "d2",       "d3",        "d4",        "d5",       "d6",       "d7",       "d8",       "d9",       "d10",      "e1",              "e2",    "e3",     "e4",       "e5",       "e6",   "e7",           "e8",          "e9",        "e10",     "f1",   "f2",      "f3",         "f4",     "f5",         "f6",       "f7",         "f8",         "f9",         "f10",             "g1",         "g2",      "g3",    "g4",      "g5",    "g6",        "g7",       "g8",        "g9",       "g10",         "h1",      "h2",     "h3",        "h4",       "h5",       "h6",        "h7",      "h8",        "h9",     "h10",    "i1",        "i2",     "i3",       "i4",         "i5",           "i6",      "i7",           "i8",         "i9",       "i10",      "j1",     "j2",  "j3",  "j5", "j7", "j8",  "j9", "j10",     "j1"]
  this.move = [["a2"],["a1"],["a4","b3"],["a3"],["a6"],["a5"],["b7"],["a9"],["a8"],["b1"],[""],["b3"],["a3","b2"],["c4","b5"],["b4","b6"],["b5","c6"],["a7","b8"],["b7","c8"],["c9","b10"],["b9","c1"], ["c2","b10"],["c1","c3","d2"],["c2"],["c5","d4","b4"],["c4","c6"],["b6","c5"],["c8"],["c7","b8","d8"],["b9","c10"],["c9","d1"],["e1","c10"],["c2","d3"],["d2","d4"], ["d3","c4"],["e5","d6"],["d5","d7"],["d6","e7"],["c8","e8"],["d10","e9"],["e1","d9"],["d1","e2","d10"],["e1","f2"], ["e4"], ["e3","f4"],["d5","f5"],["f6"],["d7", "f7"], ["e9","f8","d8"],["e8","d9"],["f1","f10"],["e10"],["f3","e2"], ["f2","f4"],["f3","e4"],["e5","g5"],["f7","e6"],["f6","e7"],["e8","g8"],["f10","g9"],["g1","e10","f9"],["f10","h1","g2"],["g1","g3"],["h3","g2"],["g5"],["g4","f5"],["h6","g7"],["g6","g8"],["f8","g7"],["f9","h9"],["h1","h10"],["g10","g1"],["i2","h3"],["g3","h2"],["h5","i4"],["h4","i5"],["g6","h7"],["h6","h8"],["h7","i8"],["g9"],["i1","g10"],["h10","j1"],["h2","j2"],["j3","i4"],["i3","h4"],["i6","j5","h5"],["i5","i7"],["i6","j7"],["i9","j8","h8"],["i8","i10"],["j1","i9"],["i10","i1"],["i2"],["i3"],["i5"],["i7"],["i8"],["j10"],["j9"],["j2"]]

};

Player.prototype.cantMove = function(input){
  if (this.am.contains(this.place)) {
    this.checkIfWall(input) }
  else if (this.am.contains(this.place) == false && input.length < 5) {  
    this.place = input
    this.able = true }
  return this.place
};


Player.prototype.checkIfWall = function(input) {
  var index = this.am.indexOf(this.place) 
     if (input == undefined || input.length > 4 || this.move[index].contains(input) == true){
       this.able = false }
     else if (this.place == "j2" && input == "j1" && this.keyHave == false){
       alert("I can't get in!")
       this.able = false 
     }
     else {
       this.place = input
       this.winGame(input)
       this.keyGrab(input)
       this.able = true
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


Player.prototype.winGame = function(input){
  if (input == "j1" && this.keyHave == true) {
    alert("Thanks for letting me in!")
    this.hasWon = true
  }
};

Player.prototype.keyGrab = function(input){
  if (input == "i8") {
    alert("I have the key!")
    this.keyHave = true
  }
};

Array.prototype.contains = function(k) {
  for(var i=0; i < this.length; i++){
    if(this[i] === k){
      return true;
    }
  }
  return false;
}

module.exports = Player;

