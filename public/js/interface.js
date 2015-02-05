
  var grid = movableGrid(10,10,function(row,col){
      console.log("You moved up:",col);
      console.log("You moved left:",row);
      console.log("You moved right:",row);
      console.log("You moved down",col);

   });

document.body.appendChild(grid); 

function movableGrid( rows, cols, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = ++i;
            cell.addEventListener('click',(function(row,col){
                return function(){
                    callback(row,col);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
} 
