var sprite1, sprite2

function setup() {
  createCanvas(800,400);
  sprite1 = createSprite(400, 200, 50, 50);
  sprite1.shapeColor = "blue";
  sprite2 = createSprite(400,400,50,50);
  sprite2.shapeColor = "blue";
}

function draw() {
  background("red");

sprite2.x = mouseX;
sprite2.y = mouseY;

if(sprite1.x - sprite2.x < sprite1.width/2 + sprite2.width/2
  && sprite2.x - sprite1.x < sprite2.width/2 + sprite1.width/2
  && sprite1.y - sprite2.y < sprite1.height/2 + sprite2.height/2
  && sprite2.y - sprite1.y < sprite2.height/2 + sprite1.height/2){
    sprite1.shapeColor = "green";
    sprite2.shapeColor = "green";
  }else{
    sprite1.shapeColor = "blue";
    sprite2.shapeColor = "blue";
  }

  drawSprites();
}