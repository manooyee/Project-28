class Mango {
    constructor(x,y,radius) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.image = loadImage("pictures/mango.png");
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){ 
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius, this.radius)
        imageMode(CENTER);
        image(this.image,this.body.position.x+10 ,this.body.position.y,70,70);
    }
}