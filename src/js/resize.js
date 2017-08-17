//resize the canvas to the size of the window
function windowResized() {
    waitress = millis() + 2000;
    if (fullscreen()) {
      resizeCanvas(displayWidth, displayHeight-40);
    } else {
      resizeCanvas(windowWidth,windowHeight);
    }
    cursor();  
    showing = true;
  }