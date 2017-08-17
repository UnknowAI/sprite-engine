
function keyPressed() {
  if(keyCode === RIGHT_ARROW || keyCode == 68) {
    player.sprite.mirrorX(1);
    player.walk(6, 90);
  }
  if(keyCode === LEFT_ARROW || keyCode == 65) {
    player.sprite.mirrorX(-1);
    player.walk(-6, 90);
  }
  if(keyCode == 32) {
    player.jump();
  }
  
  return false;
}

function keyReleased() {
  if(keyCode === RIGHT_ARROW || keyCode == 68) {
    player.idle();
  }
  if(keyCode === LEFT_ARROW || keyCode == 65) {
    player.idle();
  }
  
  return false;
}