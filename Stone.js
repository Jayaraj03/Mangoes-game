class Stone {
    constructor(x,y){
        var options ={
            isStatic : true,
            restitution :0,
            friction : 1,
        }

        this.width = 50;
        this.height = 50;
        this.image = loadImage("sprites/stone.png")
        World.add(world,this.body)

    }
}

function keyPressed(){
    if (keyCode === 32){
        Matter.Body.setPosition(stoneObj.body,{ x:235,y:420})
        launcherObject.attach(stoneObj.body);
    }
}