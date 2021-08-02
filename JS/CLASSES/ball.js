class Ball
{
    constructor(x, y, imagePath) 
    {
        var options = {
            restitution : 0.2,
            frictionAir : 0.1,
            frictionStatic : 0.1,
            density : 12,
            //isStatic: true,
        }
        
      this.body = Bodies.circle(x, y, 40, options);
      this.x = x;
      this.y = y;

      this.image = loadImage(imagePath)

      World.add(world, this.body);
    }

    display() 
    {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      //ellipse(0, 0, 40);
      imageMode(CENTER);
      image(this.image, 0, 0, 40, 40);
      pop();
    }
};