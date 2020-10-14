class polygon{
  constructor() {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
          
      }
      Polygon = Bodies.circle(50,200,20);
      this.radius =radius; 
      World.add(world, this.body);
      
      slingshot1= new slingshot1(this.Polygon,{x:100,y:200})
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y)
      
      imageMode(CENTER);
      image(Polygon_image,Polygon.position.x,Polygon.position.y,40,40);
      pop();
      
    }


}

  
