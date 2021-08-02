class Player{
    constructor(x, y, angle, imagePath) {
        var options = {
            'friction':1.0,
            'density':1.0,
            'isStatic' : true
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.image = loadImage(imagePath);
        this.angle = angle;
        World.add(world, this.body);
    }

      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        rotate(this.angle);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}