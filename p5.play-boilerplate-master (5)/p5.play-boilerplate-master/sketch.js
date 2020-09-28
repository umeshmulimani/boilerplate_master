

function setup() {
  createCanvas(640, 400);
  noStroke();
 stroke(255,0,0);
   strokeWeight(7);
  line(0,0,100,0);
 


  

  createSprite(400, 200, 50, 50);
  arc(50, 55, 50, 50, 0, HALF_PI);
  noFill();
  arc(50, 55, 60, 60, HALF_PI, PI);
  arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
  arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
}

function draw() {
   background(0);
  // Scale the mouseX value from 0 to 640 to a range between 0 and 175
  let c = map(mouseX, 0, width, 0, 175);
  // Scale the mouseX value from 0 to 640 to a range between 40 and 300
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);
}
  //Calculating using predifined func from p5.js
  hr =  hour();
  mn = minute();
  sc = second();
  drawSprites();
