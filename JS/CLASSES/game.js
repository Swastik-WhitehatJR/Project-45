class Game {
    constructor() {}

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if (gameState === 0) {
            player = new Player(displayWidth / 8, displayHeight / 5, 90, "IMAGES/car1.png");
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }

        car1 = new Player(displayWidth / 8, displayHeight / 5, 90, "IMAGES/car1.png")
        car2 = new Player(displayWidth / 8, displayHeight / 1.25, 90, "IMAGES/car2.png")
        car3 = new Player(displayWidth / 1.15, displayHeight / 5, 270, "IMAGES/car3.png")
        car4 = new Player(displayWidth / 1.15, displayHeight / 1.25, 270, "IMAGES/car4.png")
        cars = [car1, car2, car3, car4];
    }

    play() {
        form.hide();

        Player.getPlayerInfo();

        if (allPlayers !== undefined) {
            background(rgb(198, 135, 103));

            //var display_position = 100;

            //index of the array
            var index = 0;


            for (var plr in allPlayers) {
                //add 1 to the index for every loop
                index = index + 1;


                /*if (index === player.index) {
                    stroke(10);
                    fill("red");
                    ellipse(x, y, 60, 60);
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y;
                }*/

                //textSize(15);
                //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
            }

        }

        drawSprites();
    }

    end() {
        console.log("Game Ended");
    }
}
