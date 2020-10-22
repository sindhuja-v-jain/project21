var bullet , speed, weight, thickness , wall;
function setup() {
  createCanvas(1600,400);
  speed = random (223, 321);
  weight = random(30, 52);
  thickness = random (22, 83);// from 22 to 59 its red and above it will be green
  bullet  = createSprite(50, 200, 100, 30)
  wall = createSprite( 1200, 200, thickness,height/2);
  wall.shapeColor=rgb( 80 , 80, 80);
  bullet.velocityX = speed;
}
function draw() {
  background(0);  
  if ( hasPenetrated (bullet, wall )){
    bullet.velocityX = 0 
    var damage = 0.5 *weight * speed * speed / (thickness*thickness*thickness);
    if (damage >10 ){
      wall.shapeColor = color (255, 0 , 0);
    }
    if(damage <10 ){
      wall.shapeColor = color(0, 255, 0);
    }
  }
  drawSprites();
}
function hasPenetrated(lbullet , lwall )
{
  bulletFrontTip = lbullet.x +lbullet.width/2;
  if (bulletFrontTip>= lwall.x )
  {
    return true;
  }
  return false;
}