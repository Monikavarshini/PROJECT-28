
    function detectcollision(stone1,mango){
        mangoBodyPosition = mango.body.position 
        stoneBodyPosition = stone1.body.position
    
        var distance = dist(mangoBodyPosition.x, mangoBodyPosition.y, stoneBodyPosition.x, stoneBodyPosition.y)
        if(distance<=mango.r+stone1.r)
        {
            Matter.Body.setStatic(mango.body,false);
        }
    }

