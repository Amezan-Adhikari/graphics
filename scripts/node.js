export class Node{
    positionX;
    positionY;
    radius;
    velocityX;
    velocityY;
    color;

    constructor(x,y,r,dx,dy,color){
        this.positionX = x;
        this.positionY = y;
        this.radius = r;
        this.velocityX = dx;
        this.velocityY = dy;
        this.color = color;
    }

    update(){
        this.positionX += this.velocityX;
        this.positionY += this.velocityY;
    }
}