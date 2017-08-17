// The statements in the setup() function 
// execute once when the program begins
function setup() {
  //makes canvas the size of the window
  createCanvas(windowWidth,windowHeight-40);
  background(43, 50, 80);

  player = new Player({x: 100, y: windowHeight-150, speed: 0, animations: {
    moving: {first: './img/player/player_walking_1.png', last: './img/player/player_walking_6.png'},
    idle: {first: './img/player/player_standing_1.png', last: './img/player/player_standing_1.png'}
  }});

  //put setup here
  //WARNING: NEVER RENDER IN HERE  
  
}