class Ball
{
  constructor(x, y, w,h) 
  {
    let options = {
     restitution:0.8
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    ellipseMode(CENTER);
    noStroke();
    fill(148,127,146);
    ellipse(pos.x,pos.y, this.w, this.h);
    pop();
  }
}