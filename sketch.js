var devisionHeight=300;
var ground;
function setup() {
  createCanvas(480,800);
  var particles=[];
  var plinkos=[];
  var divisions=[];

  ground=new Ground(365,785)

 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  ground.display();

  for(var k=0;k <=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));;
  }
} 
for (var j=0;j< particles.length;j++){
  particles[j].display();
}
for (var k=0; k<divisions.length;k++){
  divisions[k].display();
}
for (var y=0; y<plinkos.length;y++){
  plinkos[y].display();
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}