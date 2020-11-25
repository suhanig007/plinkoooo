class Particle{
    constructor(x,y,r,Options){
       var Options= {
          restituition:0.4 
       }
    this.r=r;
    this.body=Bodies.circle(x,y,this.r,Options);
    this.color=color(random(0,255),random(0,255), random(0,255));
    world.add(world,this.body);
    }
    if( frameCount%60===0) {
        particles.push(new Particle(random(width/2-10,width/2+10, 10,10)))
    }

    
    
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push ();
    translate(pos.x,pos.y)
    rotate (angle)
    
    nonStroke();
    fill (this.color)
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r)
    pop();
    
    }
}