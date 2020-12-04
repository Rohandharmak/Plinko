class Plinko{
    constructor(x,y,h){

        var options ={
            restitution:0.4,
        }
        this.r=10;

        this.body= Bodies.circle(x,y,this.r,options);
        // should be in plinko class
    for(var j=40;j <=width;j=j+50){
        plinkos.push(new Plinko(j,75));
    }
    for(var j=15;j <=width-10;j=j+50){
      plinkos.push(new Plinko(j,175));
  }
  
  
        World.add(world,this.body);
        
    }
    display(){

        var pos=this.body.position;
        var angle= this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();

    }
};