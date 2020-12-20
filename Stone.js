class Stone {
    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.image = loadImage("pictures/stone.png");
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){ 
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius, this.radius)
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
}