

var Grid = function(){
  this.columns = 10;
  var rows = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  var grid = [];
  for (rowIndex in rows) {
    for (column = 1; column <= this.columns; column++) {
      grid.push(rows[rowIndex] + column);
    }
  }
  this.map = grid;
};

//want to be able to make walls between each cell
module.exports = Grid;