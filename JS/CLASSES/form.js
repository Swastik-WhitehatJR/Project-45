class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');

    this.title.addClass('title')
    this.input.addClass('input morph active')
    this.button.addClass('play')
    this.reset.addClass('btn morph reset')
    this.greeting.addClass('greeting')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("BILLIARDS GAME");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 20 , displayHeight/2 - 80);
    this.button.position(displayWidth/2, displayHeight/2);
    this.reset.position(displayWidth-120,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name + "!")
      this.greeting.position(displayWidth/2-50, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
