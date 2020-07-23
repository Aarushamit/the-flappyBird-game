

var bird;
var pipes = [];
var score = 0;


function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log('HIT');
      bird.visible = false;
      pipes[i].visible = false;
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }

  if(frameCount%75===0) {
    score+= 1;
  }

  this.Text = text("your score:"+score, 20, 20);

  if(this.highlight === true) { 
    score = score-10;
  }


}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    score = score+1;
    //console.log("SPACE");
  }

  
}
