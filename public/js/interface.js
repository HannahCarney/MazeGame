
  var grid = clickableGrid(10,10,function(row,col){
      console.log("You moved up:",col);
      console.log("You moved left:",row);
      console.log("You moved right:",row);
      console.log("You moved down",col);

   });

document.body.appendChild(grid); 

function clickableGrid( rows, cols, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = ++i;
            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
} 
