class chain {
    constructor(bodyA,b){
        var options ={
         bodyA:bodyA,
         pointB:b,
         length:10,
         stiffness:0.004

        }

        this.chain1=Matter.Constraint.create(options);
        this.pointB=b;
        World.add(world,this.chain1);

        }

       fly()
       {
        this.chain1.bodyA=null;
       }
    
      attach(body){
      this.chain.bodyA=body
      
      
      
      
      
      }
       

      
       display(){
       strokeWeight(5)
       if(this.chain1.bodyA)
        {
          var pointA = this.chain1.bodyA.position;
          line(pointA.x,pointA.y, this.pointB.x,this.pointB.y);
        }
    }
  } 
