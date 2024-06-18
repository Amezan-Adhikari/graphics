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

    update(canvas){
        this.positionX = this.positionX + this.velocityX;
        this.positionY = this.positionY + this.velocityY;

        if((this.positionX + this.radius) > canvas.width ){
            this.velocityX = -this.velocityX;
            this.positionX = canvas.width-this.radius;
        }
        if((this.positionX - this.radius) < 0){
            this.velocityX = -this.velocityX;
            this.positionX = this.radius;
        }

        if((this.positionY + this.radius) > canvas.height ){
            this.velocityY= -this.velocityY;
            this.positionY = canvas.height-this.radius;
        }
        if((this.positionY - this.radius) < 0){
            this.velocityY = -this.velocityY;
            this.positionY = this.radius;
        }


    }
}