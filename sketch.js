
var r = 0;
var g = 50;
var b=255;


var wall,thickness;


var bullet,speed,weight;


function setup(){
  createCanvas(1600,400);
  
  thickness = random(22,83);
  wall = createSprite(1400,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet = createSprite(200,200,75,35);
  speed = random(223,321);
  bullet.velocityX = speed;
  weight = random(30,52);
  bullet.weight = weight;
  bullet.shapeColor = color(255,255,255);
  
}


function draw(){
background(0,0,0)
  //sphere.x = World.mouseX;
  //sphere.y = World.mouseY;
 
 if(hasCollided(bullet,wall)) {
  bullet.velocityX = 0;
  var damage = weight * speed * speed/ (thickness * thickness * thickness)
 
 

  if(damage > 10)
  {
    wall.shapeColor = color(250,0,0);
  }
  
  if(damage < 10){
    wall.shapeColor = color(0,250,0);
  }
}


drawSprites ();
}

function hasCollided(bullet,wall){
bulletRightEdge = bullet.x + bullet.widht;
wallLeftEdge = wall.x;
if(bulletRightEdge >= wallLeftEdge){
  return  true;
}
return false;
}
