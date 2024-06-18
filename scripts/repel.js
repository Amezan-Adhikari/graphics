import { state } from "./store.js";


export function repel(nodes){
        if(!nodes) return;
        let radius = 100;
    
    
      nodes.forEach(node => {
        let distance = (Math.sqrt((Math.pow((node.positionX-state.X),2)+(Math.pow((node.positionY-state.Y),2)))));
        let angle = Math.atan2(node.positionY-state.Y,node.positionX-state.X);
        if(distance<radius){
            node.velocityX = Math.cos(angle);
            node.velocityY = Math.sin(angle);

            node.positionX = state.X + radius*Math.cos(angle);
            node.positionY = state.Y + radius* Math.sin(angle);
            console.log(node);
        }
      });
}