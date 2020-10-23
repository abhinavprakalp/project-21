var car,wall;

var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed = random (223,321);
  weight = random (400,1500);
  thickness = random (23,83);

  car = createSprite(50, 200, 50, 10);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor =(80,80,80);

}

function draw() {
  background("blue");  

  car.velocityX=speed;

  if (wall.x-car.x < car.width/2 + wall.width/2){
    car.velocityX=0;

    var deformation =(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if (deformation>10){
      wall.shapeColor= "green";
    }
    if (deformation<10 && deformation>0){
      wall.shapeColor= "red";
    }
    }

  drawSprites();
}
