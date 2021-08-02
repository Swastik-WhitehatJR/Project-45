class Pocket {
  constructor(x, y) {

    var options = {
      friction: 1,
      isStatic: true
    }

    this.body = Bodies.circle(x, y, 100, options);
    this.x = x;
    this.y = y;

    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    ellipse(0, 0, 100);
    pop();
  }
};