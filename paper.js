class Paper{
constructor(x,y){
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:0.5

        
    }
    this.body  = Bodies.circle(x,y,60,options);
    World.add(world,this.body);
    this.image = loadImage("paper.png");
    
}

display(){

push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
image(this.image,0,0,100,100);
//ellipseMode(RADIUS)
//ellipse(0,0,20,20);
pop()

}


}