class Paper {
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restritution:0.3,
            friction:0.5,
            density:1.2

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);

        this.image=loadImage("images/paper.png")
        World.add(world, this.body);
    }
    display()
    {
        var paperpos=this.body.position;
        
        push()
        translate(paperpos.x,paperpos.y);
        //rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,0,90,90);
        //strokeWeight(3);
        //fill(255,0,255)
        //ellipse(0,0,this.r,this.r);
        //ellipse(CENTER);
        pop()
    }
}