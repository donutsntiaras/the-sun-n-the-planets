function setup() {
  createCanvas(900,500);
  
  //creating the sun and the planets

  //1
  sun = createSprite(400,200,100,100);
  sun.shapeColor="yellow";
  sun.debug=true;
  
  //2
  planet =createSprite(130,150,30,30);
  planet.shapeColor="brown";
  planet.visible=true;
  planet.debug=true;

  //3
  planet1 =createSprite(230,250,30,30);
  planet1.shapeColor="brown";
  planet1.visible=true;
  planet1.debug=true;
 
  //4
  planet2 =createSprite(430,450,30,30);
  planet2.shapeColor="brown";
  planet2.visible=true;
  planet2.debug=true;

  //5
  planet3 =createSprite(330,350,30,30);
  planet3.shapeColor="brown";
  planet3.visible=true;
  planet3.debug=true;
}

function draw() {
  background(0,0,0);
  
  //adding velocity to the planets
  planet.velocityX=5;
  planet.velocityY=3;

  planet1.velocityX=5;
  planet1.velocityY=-3;

  planet2.velocityX=-5;
  planet2.velocityY=-3;

  planet3.velocityX=0;
  planet3.velocityY=-3;
      
 if(isTouching(planet,sun)){
   planet.visible=false;
 }
 else if(isTouching(planet1,sun)){
  planet1.visible=false;
}
 else if(isTouching(planet2,sun)){
  planet2.visible=false;
}
else if(isTouching(planet3,sun)){
  planet3.visible=false;
}

  drawSprites();
}

function bounceOff(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 ||
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.hieght/2 + object2.height/2){
      object1.velocityX = object1.velocityX * (-1);
      object1.velocityY = object1.velocityY * (-1);
    }
   else{
    object1.velocityX=0;
    object1.velocityY=0;
   } 
}

function isTouching(object1,object2){
  if (object1.x - object2.x === object1.width/2 + object2.width/2 ||
    object2.x - object1.x === object1.width/2 + object2.width/2 ){
     return true;
    }
    else {
     return false;
    }
}
