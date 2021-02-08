var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side , side2,side3,sides,side2s,side3s;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	sides = createSprite(290, 605, 20, 140)
	sides.shapeColor = "red";
    side2s = createSprite(width/2, height-35,200, 20  )
	side2s.shapeColor = "red";
    side3s = createSprite(490, 605,20, 140)
    side3s.shapeColor = "red";
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.15

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-25, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 side = Bodies.rectangle(300, 620, 20, 100 , {isStatic:true})
	 World.add(world,side);
	 side2 = Bodies.rectangle(width/2, 650, 100, 5 , {isStatic:true})
	 World.add(world,side2);
 
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode===DOWN_ARROW) {

Matter.Body.setStatic (packageBody, false);
    
  }
}


