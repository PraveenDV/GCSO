var car1,car2,car3,car4,wall1,wall2,wall3,wall4;

var speed,weight;

var object1,object2;

var deformation;

function setup() {
  createCanvas(1600,300);
 car1=createSprite(50,50,10,10);
 car2=createSprite(50,100,10,10);
 car3=createSprite(50,150,10,10);
 car4=createSprite(50,200,10,10);
 wall1=createSprite(1200,50,10,20);
 wall2=createSprite(1200,100,10,20);
 wall3=createSprite(1200,150,10,20);
 wall4=createSprite(1200,200,10,20);

 speed=random(55,90);
 weight=random(400,1500); 
}

function draw() {
  background(0,0,0);
  car1.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;
 
  deformation=0.5*weight*speed*speed/22509;

  if(isTouching(wall1,car1)){
    car1.velocityX=0;
    
    if(isTouching(wall1,car1) && deformation>180){
      car1.shapeColor="red";
    }
    if(isTouching(wall1,car1) && deformation>100 && deformation<180){
      car1.shapeColor="yellow";
    }
    if(isTouching(wall1,car1) && deformation<100){
      car1.shapeColor="green";
    }
  }
  if(isTouching(wall2,car2)){
    car2.velocityX=0;
    
    if(isTouching(wall2,car2) && deformation>180){
      car2.shapeColor="red";
    }
    if(isTouching(wall2,car2) && deformation>100 && deformation<180){
      car2.shapeColor="yellow";
    }
    if(isTouching(wall2,car2) && deformation<100){
      car2.shapeColor="green";
    }
  }
  if(isTouching(wall3,car3)){
    car3.velocityX=0;
    
    if(isTouching(wall3,car3) && deformation>180){
      car3.shapeColor="red";
    }
    if(isTouching(wall3,car3) && deformation>100 && deformation<180){
      car3.shapeColor="yellow";
    }
    if(isTouching(wall3,car3) && deformation<100){
      car3.shapeColor="green";
    }
  }
  if(isTouching(wall4,car4)){
    car4.velocityX=0;
    
    if(isTouching(wall4,car4) && deformation>180){
      car4.shapeColor="red";
    }
    if(isTouching(wall4,car4) && deformation>100 && deformation<180){
      car4.shapeColor=color(230,230,0);
    }
    if(isTouching(wall4,car4) && deformation<100){
      car4.shapeColor=color(0,255,0);
    }
  }
  


  drawSprites();
}

function isTouching(object1,object2){
if(object1.x-object2.x<object2.width/2+object1.width/2){
 return true;
}else{
  return false;
}
}