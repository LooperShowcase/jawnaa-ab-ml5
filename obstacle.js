class Obstacle {
  constructor() {
    this.size = 50;
    this.x = width;
    this.y = height - this.size;
    this.option = random(1);
  }
  move() {
    this.x -= 7;
  }
  show() {
    if (this.option > 0.5) {
      image(obstacleImg, this.x, this.y, this.size, this.size);
    } else {
      image(obs2, this.x, this.y, this.size, this.size);
    }
  }
}
