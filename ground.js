class Ground 
{
    constructor(x,y,w,h){
    
        var options={
            isStatic:true
        }
    
    
    
    this.body = Bodies.rectangle(x,y,w,h,options)
    this.width = width
    this.height = height
    World.add(world,this.body);

}

  display(){
  var pos=this.body.position
  rectMode(CENTER)
  fill("yellow")
  rect(pos.x,pos.y,this.width,this.height)
  }
}