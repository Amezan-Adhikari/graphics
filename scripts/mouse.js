export function mouseMove(e,nodes){
    if(!nodes) return;
  let posX =  e.clientX;
  let posY =  e.clientY;

  let radius = 40;


  nodes.forEach(node => {
    let distance = (Math.sqrt((Math.pow((node.positionX-posX),2)+(Math.pow((node.positionY-posY),2)))));
    let angle = Math.atan2(node.positionY-posY,node.positionX-posX)

    if(distance<radius){
        node.velocityX += Math.cos(angle);
        node.velocityY += Math.sin(angle);
    }
    else{
        node.velocityX = 0;
        node.velocityY = 0;
    }
  });
}