function moveLeft() {
	  player.moveLeft();
    if (player.able === true)
      position.x--;
      if (position.x < 0) {
        position.x = 0;
      }
}

function moveUp() {
	player.moveUp()
    if (player.able === true)
      position.y--;
      if (position.y < 0)
        position.y = 0;
}

function moveRight() {
	player.moveRight()
    if (player.able === true)
      position.x++;
      if (position.x >= mazeGame[0].length)
        position.x = mazeGame[0].length - 1;      
}

function moveDown() {
	player.moveDown()
	if (player.able === true)
      position.y++;
      if (position.y >= mazeGame.length)
        position.y = mazeGame.length - 1;
}

function highlightCell() {
    $('.row1').removeClass('selected');
    mazeGame[position.y][position.x].addClass('selected');
    console.log(player.place)
}

function key(){
  if (player.keyHave == true) {
    $('.row1').removeClass('key');

  }
}
