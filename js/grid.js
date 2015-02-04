var path = require('./path')

// var path = new Path();

var Grid = function(){
  
  this.columns = 4;
  var rows = ["a", "b"];
  var grid = [];
  for (rowIndex in rows) {
    for (column = 1; column <= this.columns; column++) {
      grid.push(rows[rowIndex] + column);
    }
  }
  this.path = grid;
};

module.exports = Grid;