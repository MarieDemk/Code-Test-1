var object 
function setup() {
  createCanvas(400, 400);
  object = createSprite(200,200,50,50); 
  object.shapeColor = "green";
}

function draw() {
  background(220);
  if (keyDown(RIGHT)) {
    object.x = object.x + 2;
  }
  if (keyDown(LEFT)) {
    object.x = object.x - 2;
  }
  drawSprites();
}