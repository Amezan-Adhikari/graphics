import { state } from "./store.js";


export function repel(nodes){
        if(!nodes) return;
        let radius = 150;
    
    
      nodes.forEach(node => {
        let distance = (Math.sqrt((Math.pow((node.positionX-state.X),2)+(Math.pow((node.positionY-state.Y),2)))));
        let angle = Math.atan2(node.positionY-state.Y,node.positionX-state.X);
        let incontact = false;
        if(distance<radius){
            incontact = true;
            node.velocityX = Math.cos(angle);
            node.velocityY = Math.sin(angle);
        }
        
            if(incontact && distance > radius){
                node.velocityX = parseFloat(Math.random().toFixed(2))-0.5;
                node.velocityY = parseFloat(Math.random().toFixed(2))-0.5;
            }
      });
}