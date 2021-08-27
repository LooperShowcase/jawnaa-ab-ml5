let player;
let playerImg;
let obstacleImg;
let bg;
let obs2;
let obstacles = [];
let wordClassifier;
function preload() {
  playerImg = loadImage("player.png");
  obstacleImg = loadImage("obstacle.png");
  bg = loadImage("background.jpg");
  obs2 = loadImage("obstacle2.png")
  let options = { probabilityThreshold: 0.7 };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(1200, 800);
  player = new Player();
  wordClassifier.classify(heardWord);
}

function heardWord(error, results) {
  if (results[0].label === "up") {
    player.jump();
  }
}
function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  background(bg);

  if (random(1) < 0.01) {
    // 0.01
    obstacles.push(new Obstacle());
  }
  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      fill("white");
      textSize(40);
      text("Game over", width / 2, height / 2);
      noLoop();
    }
    
  }

  player.show();
  player.move();
}
