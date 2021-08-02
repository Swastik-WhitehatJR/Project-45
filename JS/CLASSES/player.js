class Player{
    constructor(x, y, angle, imagePath) {
        var options = {
            'friction':1.0,
            'density':1.0,
            //'isStatic' : true
        }
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.image = loadImage(imagePath);
        this.angle = angle;
        World.add(world, this.body);
        this.name = null;
        this.rank = null;
        this.index = null;
        this.x = 5;
        this.y = 5;
        this.score = 0;
    }

      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        rotate(this.angle);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }

      getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }

      update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          x:this.x,
          y:this.y,
          score: this.score,
        });
      }
    
      static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
}